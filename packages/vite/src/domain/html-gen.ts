import { commonContainer, CommonPathResolver, getPath, readFileSync, writeFileSync } from "@tezjs/common";
import axios from 'axios';
import { HtmlPage as iHtmlPage } from "@tezjs/types";
import { EXTRACT_URI_REGEX, TEZCSS_PATH, TEZJS_PATH, TZ_JS_PATH } from "../const/core.const";
import { depsContainer } from "../const/deps-container.const";
import getUrl from "../functions/get-url";
import { DependencyConfig } from "../interface/dependency-config";
import { DepsContainerConfig } from "../interface/deps-container-config";
import { build } from 'esbuild'
import { HtmlPage } from "./html-page";
import { JsCodeGen } from "./html/js-code-gen";
import { routeComponentWriter } from "../const/route-component-writer";
import { preCacheAssets } from "../const/pre-cache-asset.template";
import { PwaConfig } from "@tezjs/types"
let exampleOnResolvePlugin = {
    name: 'example',
    setup(build) {
      build.onResolve({ filter: /.component.|.layout.|.page./ }, args => {
        if([".component.",".layout.",".page."].filter(t=>args.path.indexOf(t) !== -1).length > 0)
            return { path: getPath([commonContainer.buildOptions.rootDir, 'dist',args.path.indexOf("assets/") ===-1 ? "assets":"", args.path],false) }
        return {path:args.path}
      })
    },
  }
export class HtmlGen{
    routes:Array<{path:string,name:string,fPath:string,isAmpPage:boolean}>;
    htmlPageRoute:{path:string,name:string,fPath:string,isAmpPage:boolean};
    depsConfig:DepsContainerConfig;
    mainDependency:DependencyConfig;
    externals:Array<string>;
    commonPathResolver:CommonPathResolver
    constructor(){
        this.commonPathResolver = new CommonPathResolver();
        this.routes = commonContainer.getAppRoutes();
        this.depsConfig = depsContainer.getDeps();
        this.mainDependency = this.depsConfig.deps[this.commonPathResolver.tezJsPath];
        this.setExternals();
        
    }
    async build(){
        const inlineStyles = await this.getInlineFontCss();
        for(var route of this.routes){
            this.htmlPageRoute = route;
                let jsGenCode = new JsCodeGen(route);
                jsGenCode.gen();
            const path = getUrl(route.path);
            
            let page:iHtmlPage = {
                head:{
                    metaTag:{},
                    inlineStyle: commonContainer.tezConfig.build.inLineCss ? this.getInlineCss(path) : new Array<{name:string,code:string}>(),
                    preloads:this.getPreloads(path,jsGenCode),
                    preFetch:this.getPreFetch(path),
                    links:new Array<{[key:string]:string}>()
                },
                body:{
                    inlineScript:commonContainer.tezConfig.build.inLineJs ? await this.getInlineJs(path) : new Array<{name:string,code:string}>(),
                    script:!commonContainer.tezConfig.build.inLineJs ?[{src:this.commonPathResolver.tezJsPath}] :[],
                    style:commonContainer.tezConfig.build.bundleCss ? this.bundleCss(path):[],
                }
            }
            inlineStyles.forEach(item =>page.head.inlineStyle.push(item));
            this.addServiceWrokerDeps(page,jsGenCode)
            await this.minifyJs([`${path}/${this.commonPathResolver.preScriptName}`,`${path}/${this.commonPathResolver.postScriptName}`])
            const htmlPage = new HtmlPage(route);
            htmlPage.createPage(page)
        }
        await this.writeTzWebWorker();
    }

    async getInlineFontCss(){
        let inlineStyles = new Array<{name:string,code:string}>();
        if(commonContainer.tezConfig.build?.inlineFontCss){
            const uris = commonContainer.tezConfig.build?.inlineFontCss;
            for(const cssUri of uris){
                const { data } = await axios.get(cssUri);
                if(data){
                    let cssString = data;
                    console.log(cssString)
                    const uris = data.match(EXTRACT_URI_REGEX);
                    for(let uri  of uris){
                        uri = uri.replace(")","");
                        let fileName = uri.split('/').pop();
                        cssString = cssString.replace(uri,`/fonts/${fileName}`);
                        const {data} = await axios.get(uri,{
                            responseType: 'arraybuffer'
                        })
                        
                        writeFileSync(this.commonPathResolver.getFontFilePath(fileName),data,true)
                    }
                    inlineStyles.push({name:cssUri,code:cssString})
                }
            }   
        }
        return inlineStyles;
    }

    addServiceWrokerDeps(page:iHtmlPage,jsCodeGen:JsCodeGen){
        if(commonContainer.tezConfig.pwa){
            let pwaConfig = commonContainer.tezConfig.pwa as PwaConfig
            if(!this.htmlPageRoute.isAmpPage)
                page.body.inlineScript.push({name:'tezjs-precache-assets',code:preCacheAssets(jsCodeGen.preCacheAssets)})
           page.head.preloads.unshift({path:`/service-worker.js`})
           
           if(pwaConfig.htmlElementConfig?.themeColor){
            if(!page.head.metaTag.name)
                page.head.metaTag.name = {};
            page.head.metaTag.name["theme-color"] = pwaConfig.htmlElementConfig?.themeColor
           }

           if(pwaConfig.htmlElementConfig?.appleTouchIcon){
               const touchIcon = pwaConfig.htmlElementConfig?.appleTouchIcon;
            page.head.links.push({rel:"apple-touch-icon",sizes:touchIcon.sizes,href:touchIcon.href})
           }

           if(pwaConfig.config){
                page.head.links.push({rel:"manifest",href:'/manifest.json'})
           }
        }
    }

    async writeTzWebWorker(){
        let jsPath = TZ_JS_PATH();
        if(this.commonPathResolver.pathExists(jsPath)){
            const result = await build({
                entryPoints:[jsPath],
                minify:true,
                write: false,
                sourcemap:false,
                format: 'esm',
                outdir:'/bundle',
                logLevel: 'silent'
            })
            for(const output of result.outputFiles)
                writeFileSync(this.commonPathResolver.tzJsPath,output.text,true);
        }
    }

    getPreFetch(path:string){
        return [`${path}/${this.commonPathResolver.postScriptName}`]
    }

    getPreloads(path:string,jsCodeGen:JsCodeGen):Array<{path:string,type?:string}>{
        const depPath = this.commonPathResolver.tezJsPath;
        const prePath = `${path}/${this.commonPathResolver.preScriptName}`;
        let preloads  = this.getPreloadTags(depPath);
        preloads.unshift({path:`/${this.commonPathResolver.tzJsHtmlRefPath}`});
        if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.loaderImage)
            preloads.push({path:`${commonContainer.tezConfig.client.loaderImage}`,type:"image"});
        if(!commonContainer.tezConfig.build.inLineJs) {
            let preloadDeps = routeComponentWriter.getPreDeps(getUrl(path)).filter(path => path.indexOf(".js") !== -1);
            preloadDeps.forEach(path=>this.pushPreload(preloads,path))
            preloads.push({path:`${prePath}`,type:"module"});
            preloads.push({path:`/${depPath}`,type:"module"});
        }
        if(commonContainer.tezConfig.htmlMeta?.head?.handler?.preloads){
            let customPreloads = commonContainer.tezConfig.htmlMeta?.head?.handler?.preloads(path,jsCodeGen.components);
            if(customPreloads && Array.isArray(customPreloads))
                customPreloads.forEach(item=> preloads.push(item))
        }
        return preloads;
    }

    getPreloadTags(path:string):Array<{path:string,type?:string}>{
        let preloads = new Array<{path:string,type?:string}>()
        if(this.depsConfig.deps[path]){
            this.depsConfig.deps[path].js.forEach(item=> {
                let items = this.getPreloadTags(item);
                items.forEach(t=>this.pushPreload(preloads,`${t.path}`))
                this.pushPreload(preloads,`/${item}`)
            })
        }
        return preloads;
    }

    pushPreload(preloads:Array<{path:string,type?:string}>,path:string){
        if(preloads.filter(t=>t.path === path).length === 0){
            preloads.push({path:path,type:"module"})
        }
    }

    bundleCss(path:string){
        let bundleCssPath = this.commonPathResolver.getBundleCSSPath(path);
        const cssReferences = this.getInlineCss(path,true);
        let code:string[] = [];
        if(cssReferences.length > 0){
            cssReferences.forEach(cssItem=>code.push(cssItem.code));
            writeFileSync(getPath([this.commonPathResolver.distPath,bundleCssPath],false),code.join('\n'),true)
        }
        let cssRefs = new Array<{href:string}>();
        cssRefs.push({href:bundleCssPath});
        if(commonContainer.tezConfig.client.imports)
            cssRefs.push({href:this.commonPathResolver.tezCSSPath});
        return cssRefs;            
    }

    getInlineCss(path:string,isBundleCss:boolean = false){
        let inlineCss = new Array<{name:string,code:string}>();
        if(!isBundleCss)
            this.setInlineCss(this.mainDependency.css,inlineCss)
        const preComponents = routeComponentWriter.getRouteComponent(getUrl(path)).pre;
        for(const preComponent of preComponents){
            const depPath = `assets/${preComponent}.${commonContainer.buildOptions.buildVersion}.js`
            if(this.depsConfig.deps[depPath]){
                this.setInlineCss(this.depsConfig.deps[depPath].css,inlineCss);
            }
            
        }
        
        return inlineCss
    }

    setInlineCss(css:string[],inlineCss:Array<{name:string,code:string}>){
        for(const cssPath of css){
            inlineCss.push({name:cssPath,code:this.depsConfig.css[cssPath]});
        }
            
    }

    getJsRef(path:string){
        return [{src:`assets${path}/${this.commonPathResolver.preScriptName}`},{src:this.commonPathResolver.tezJsPath}]
    }
    getCssRef(path:string){
        const preCssPath =`assets${path}/pre.css` 
        let cssRefs = new Array<{href:string}>();
        if(this.commonPathResolver.pathExists(getPath([this.commonPathResolver.distPath,preCssPath])))
            cssRefs.push({href:preCssPath})
        cssRefs.push({href:this.commonPathResolver.tezCSSPath})
        const depPath = `assets${path}/${this.commonPathResolver.preScriptName}`
        if(this.depsConfig.deps[depPath])
        for(const cssPath of this.depsConfig.deps[depPath].css)
            cssRefs.push({href:cssPath});
        return cssRefs;
    }

    async getInlineJs(path:string){
        let preInlinePath = `${path}/pre.inline.js`;
        let inlineJsCode = await this.minifyJs([preInlinePath],true);
        let tezjsCode = readFileSync(getPath([this.commonPathResolver.distPath,this.commonPathResolver.tezJsPath]),true) as string;
        inlineJsCode.push({name:this.commonPathResolver.tezJsPath,code: this.resetImports(tezjsCode)});
        this.commonPathResolver.deleteFile(getPath([ this.commonPathResolver.distPath,preInlinePath]));
        return inlineJsCode;
    }
    

    async minifyJs(jsPaths:Array<string>,isInline:boolean = false){
        let inlineJs = new Array<{name:string,code:string}>();
        for(const jsPath of jsPaths){
            
            let fullPath = getPath([ this.commonPathResolver.distPath,jsPath]);
            if(this.commonPathResolver.pathExists(fullPath)){
               const result = await build({
                    entryPoints:[fullPath],
                    plugins:[exampleOnResolvePlugin],
                    bundle:isInline,
                    allowOverwrite:true,
                    minify:true,
                    write: false,
                    sourcemap:false,
                    external:isInline? this.externals : [],
                    format: 'esm',
                    outfile:fullPath,
                    logLevel: 'silent'
                })
                
                for(const output of result.outputFiles){
                    let text  = output.text;
                    text = this.resetImports(text);
                    if(isInline){
                        inlineJs.push({name:jsPath,code:text});
                    }else
                        writeFileSync(fullPath,text,true)
                }
            }
        }

        return inlineJs;
    }

    private resetImports(text){
        for(let i=this.externals.length-1;i>=0;i--)
                    {
                        let externalJs = this.externals[i]
                        if(text.indexOf(externalJs) > -1)
                            text = text.replace(new RegExp(externalJs,"g"),`/assets/${externalJs.split('/').pop()}`)
                    }
                    return text;
    }

    setInlineJs(dependencyConfig:DependencyConfig,inlineJs:{[key:string]:string}){
        for(const jsPath of dependencyConfig.js)
            inlineJs[jsPath]= this.depsConfig.css[jsPath];
    }

    setExternals(){
        this.externals = new Array<string>();
        this.depsConfig.excludes.forEach(jsPath=>{
            let fileName = jsPath.replace('assets/',"");
            this.externals.push(`./${fileName}`)
            var path = '';
            this.externals.push(`./${fileName}`)
            for(var i=0;i<this.depsConfig.highestPathDepth;i++)
            {
                path+='../'
                this.externals.push(`${path}${fileName}`)
            }
        })

    }
}