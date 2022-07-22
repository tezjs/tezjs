import { commonContainer, CommonPathResolver, getPath, readFileSync, writeFileSync } from "@tezjs/common";
import { HtmlPage as iHtmlPage } from "@tezjs/types";
import { TEZCSS_PATH, TEZJS_PATH, TZ_JS_PATH } from "../const/core.const";
import { depsContainer } from "../const/deps-container.const";
import getUrl from "../functions/get-url";
import { DependencyConfig } from "../interface/dependency-config";
import { DepsContainerConfig } from "../interface/deps-container-config";
import { build } from 'esbuild'
import { HtmlPage } from "./html-page";
import { JsCodeGen } from "./html/js-code-gen";
import { routeComponentWriter } from "../const/route-component-writer";
let exampleOnResolvePlugin = {
    name: 'example',
    setup(build) {
      build.onResolve({ filter: /component|layout/ }, args => {
        return { path: getPath([commonContainer.buildOptions.rootDir, 'dist',args.path.indexOf("assets/") ===-1 ? "assets":"", args.path],false) }
      })
    },
  }
export class HtmlGen{
    routes:Array<{path:string,name:string,fPath:string}>;
    depsConfig:DepsContainerConfig;
    mainDependency:DependencyConfig;
    externals:Array<string>;
    commonPathResolver:CommonPathResolver
    constructor(){
        this.routes = commonContainer.getAppRoutes();
        this.depsConfig = depsContainer.getDeps();
        this.mainDependency = this.depsConfig.deps[TEZJS_PATH];
        this.setExternals();
        this.commonPathResolver = new CommonPathResolver();
    }
    async build(){
        for(var route of this.routes){
                let jsGenCode = new JsCodeGen(route);
                jsGenCode.gen();
            const path = getUrl(route.path);
            let page:iHtmlPage = {
                head:{
                    inlineStyle: commonContainer.tezConfig.build.inLinCss ? this.getInlineCss(path) : new Array<{name:string,code:string}>(),
                    preloads:this.getPreloads(path)
                },
                body:{
                    //inlineScript:commonContainer.tezConfig.build.inLineJs ? this.getInlineJs(path) : new Array<{name:string,code:string}>(),
                    script:[{src:TEZJS_PATH}],
                    style:!commonContainer.tezConfig.build.inLinCss ? this.getCssRef(path):[],
                }
            }
            await this.bundleJs(path)
            const htmlPage = new HtmlPage(route);
            htmlPage.createPage(page)
        }
        await this.writeTzWebWorker();
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

    getPreloads(path:string):Array<{path:string,type?:string}>{
        const depPath = `assets/tez.js`
        const prePath = `${path}/pre.js`;
        let preloads  = this.getPreloadTags(depPath);
        preloads.unshift({path:'/tz.js'});
        preloads.push({path:`${prePath}`,type:"module"});
        preloads.push({path:`/${depPath}`,type:"module"});
        return preloads;
    }

    getPreloadTags(path:string):Array<{path:string,type?:string}>{
        let preloads = new Array<{path:string,type?:string}>()
        if(this.depsConfig.deps[path]){
            this.depsConfig.deps[path].js.forEach(item=> {
                let items = this.getPreloadTags(item);
                items.forEach(t=>this.pushPreload(preloads,t.path))
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

    getInlineCss(path:string){
        let inlineCss = new Array<{name:string,code:string}>();
        this.setInlineCss(this.mainDependency.css,inlineCss)
        const preComponents = routeComponentWriter.getRouteComponent(getUrl(path)).pre;
        for(const preComponent of preComponents){
            const depPath = `assets/${preComponent}.js`
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
        return [{src:`assets${path}/pre.js`},{src:TEZJS_PATH}]
    }
    getCssRef(path:string){
        const preCssPath =`assets${path}/pre.css` 
        let cssRefs = new Array<{href:string}>();
        if(this.commonPathResolver.pathExists(getPath([this.commonPathResolver.distPath,preCssPath])))
            cssRefs.push({href:preCssPath})
        cssRefs.push({href:TEZCSS_PATH})
        const depPath = `assets${path}/pre.js`
        if(this.depsConfig.deps[depPath])
        for(const cssPath of this.depsConfig.deps[depPath].css)
            cssRefs.push({href:cssPath});
        return cssRefs;
    }

    async bundleJs(path:string){
        const js = [`${path}/pre.js`,`${path}/post.js`];
        for(const jsPath of js){
            let fullPath = getPath([ this.commonPathResolver.distPath,jsPath]);
            if(this.commonPathResolver.pathExists(fullPath)){
               const result = await build({
                    entryPoints:[fullPath],
                    plugins:[exampleOnResolvePlugin],
                    bundle:true,
                    allowOverwrite:true,
                    minify:false,
                    write: false,
                    sourcemap:false,
                    external:this.externals,
                    format: 'esm',
                    outfile:fullPath,
                    logLevel: 'silent'
                })

                for(const output of result.outputFiles){
                    let text  = output.text;
                    for(let i=this.externals.length-1;i>=0;i--)
                    {
                        let externalJs = this.externals[i]
                        if(text.indexOf(externalJs) > -1)
                            text = text.replace(new RegExp(externalJs,"g"),`/assets/${externalJs.split('/').pop()}`)
                    }
                    writeFileSync(fullPath,text,true)
                }
            }
        }
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