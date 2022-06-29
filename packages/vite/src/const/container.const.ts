import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import {globby} from 'globby';
import getUrl from "../functions/get-url";
import { ImportState } from "../interface/import-state";
import { RouteBuild } from "../interface/route-build";
import { tezTemplate } from "./tez.template";

export const appContainer:
    {
        addOrUpdateTezTS(route?:{name:string,fPath:string,path:string}):void
        build:RouteBuild;
    } = new (class {
        tsCodeCache:string
        importState:ImportState;
        pathResolver = new CommonPathResolver();
        build:RouteBuild = {route:{path:'',fPath:''}};
        async addOrUpdateTezTS(route?:{name:string,fPath:string,path:string}){
            this.build.route = route;
            let routes = await this.setupClientRoutes(route);
            let refrenceState:ImportState = {imports:'',props:'',runtimeImports:''};
            if(!this.importState){
                let existsFilesorFolders = this.pathResolver.getExistsFilesOrFolders();
                ['store'].forEach(key=> {if(existsFilesorFolders[key]) refrenceState.imports += `import * as ${key} from '#${key}';`});
                if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.imports)
                    commonContainer.tezConfig.client.imports.forEach(item=>refrenceState.imports += `import '${item}';`)
                
                if(existsFilesorFolders.addLib){
                    refrenceState.imports +=`\nimport * as func from '#add-lib'; func.default();`
                    delete existsFilesorFolders.addLib;
                }
            //     Object.keys(existsFilesorFolders).forEach(key=>{
            //         if(existsFilesorFolders[key]){
            //             if(key === "components" || key === "layouts"|| key === "pages")
            //                 refrenceState.props += `${key}:import.meta.glob('/${key}/**/*.vue'),`
            //             else
            //                 refrenceState.props += `${key}:${key}.default,`
            //     } 
            // })
            //refrenceState.props += `autoRoutes:autoRoutes,`
            refrenceState.props += `dynamicRoutes:dynamicRoutes`
            }else
            refrenceState = this.importState;
        refrenceState.runtimeImports = routes; 
        
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(this.pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        this.importState = refrenceState;
        return refrenceState;
        }

        async setupClientRoutes(route?:{[key:string]:any}){
            // let paths = await globby([
            //     'pages'
            //   ], {expandDirectories: {
            //     extensions: ['vue']
            // },cwd:commonContainer.buildOptions.rootDir, followSymbolicLinks: true});
            // let uris = {urls:{},re:{}};
            // paths.forEach(path=>{
            //     let transformedPath = path.split('pages/')[1].replace(/_/g,':').replace('/index.vue','').replace('.vue','');
            //     if(/:/.test(transformedPath))
            //         uris.re[`/${transformedPath}`] =`/${path}`;
            //     else
            //         uris.urls[transformedPath === '' ? '/index':`/${transformedPath}`] = `/${path}`;
            // })
            // const routes = JSON.stringify(uris);
            // let stringifyRoutes =  `const autoRoutes = ${routes};`
            let stringifyRoutes =`${this.getRoutes(route)}`
            return stringifyRoutes;
        }
        getRoutes(route?:{[key:string]:any}){
            let routes:string = '';
            if(commonContainer.buildOptions.commandName == "dev")
            {
                routes = `const dynamicRoutes = {`
                commonContainer.getAppRoutes().map(route =>routes+= `"${route.path}": ()=> import("./deps${getUrl(route.path)}/pre").then(t=>t.default),`)
                routes += `}`;
            }else{
            routes= `import pre from "./deps${getUrl(route.path)}/pre";
                const dynamicRoutes = {
                    "${route.path}": ()=> new Promise((re,rej)=>re(pre))
                }
                `
            }
            return routes
        }
    })();