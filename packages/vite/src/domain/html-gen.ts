import { commonContainer, CommonPathResolver, getPath, readFileSync, writeFileSync } from "@tezjs/common";
import { HtmlPage as iHtmlPage } from "@tezjs/types";
import { TEZCSS_PATH, TEZJS_PATH, TZ_JS_PATH } from "../const/core.const";
import { depsContainer } from "../const/deps-container.const";
import getUrl from "../functions/get-url";
import { DependencyConfig } from "../interface/dependency-config";
import { DepsContainerConfig } from "../interface/deps-container-config";
import { buildSync } from 'esbuild'
import { HtmlPage } from "./html-page";
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
    build(){
        for(var route of this.routes){
            const path = getUrl(route.path);
            let page:iHtmlPage = {
                head:{
                    inlineStyle: commonContainer.tezConfig.build.inLinCss ? this.getInlineCss(path) : new Array<{name:string,code:string}>(),
                    preloads:this.getPreloads()
                },
                body:{
                    inlineScript:commonContainer.tezConfig.build.inLineJs ? this.getInlineJs(path) : new Array<{name:string,code:string}>(),
                    script:!commonContainer.tezConfig.build.inLineJs ? this.getJsRef(path):[],
                    style:!commonContainer.tezConfig.build.inLinCss ? this.getCssRef(path):[],
                }
            }
            const htmlPage = new HtmlPage(route);
            htmlPage.createPage(page)
        }
        this.writeTzWebWorker();
    }

    writeTzWebWorker(){
        let jsPath = TZ_JS_PATH();
        if(this.commonPathResolver.pathExists(jsPath)){
            const result = buildSync({
                entryPoints:[],
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

    getPreloads():Array<{path:string,type?:"module"}>{
        return this.mainDependency.js.map(item=> {return {path:`/${item}`,type:"module"}})
    }

    getInlineCss(path:string){
        let inlineCss = new Array<{name:string,code:string}>();
        this.setInlineCss(this.mainDependency.css,inlineCss)
        const depPath = `assets${path}/pre.js`
        if(this.depsConfig.deps[depPath])
            this.setInlineCss(this.depsConfig.deps[depPath].css,inlineCss);
        return inlineCss
    }

    setInlineCss(css:string[],inlineCss:Array<{name:string,code:string}>){
        for(const cssPath of css)
            inlineCss.push({name:cssPath,code:this.depsConfig.css[cssPath]});
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

    getInlineJs(path:string){
        let inlineJs = new Array<{name:string,code:string}>();
        const jsPath = `assets${path}/pre.js`;
        const result = buildSync({
            entryPoints:[`${getPath([ this.commonPathResolver.distPath,jsPath])}`,`${getPath([ this.commonPathResolver.distPath,TEZJS_PATH])}`],
            bundle:true,
            minify:true,
            write: false,
            sourcemap:false,
            external:this.externals,
            format: 'esm',
            outdir:'/bundle',
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
            inlineJs.push({name:jsPath,code:text});
        }
        return inlineJs
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