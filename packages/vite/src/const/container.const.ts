import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import {globby} from 'globby';
import getUrl from "../functions/get-url";
import { ImportState } from "../interface/import-state";
import { tezTemplate } from "./tez.template";

export const appContainer:
    {
        addOrUpdateTezTS():void
    } = new (class {
        tsCodeCache:string
        async addOrUpdateTezTS(){
            let routes = await this.setupClientRoutes();
            let pathResolver = new CommonPathResolver();
            let existsFilesorFolders = pathResolver.getExistsFilesOrFolders();
            let refrenceState:ImportState = {imports:'',props:''};
            ['store','router'].forEach(key=> {if(existsFilesorFolders[key]) refrenceState.imports += `import * as ${key} from '#${key}';`});
            if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.imports)
                commonContainer.tezConfig.client.imports.forEach(item=>refrenceState.imports += `import '${item}';`)
            refrenceState.imports += routes; 
            if(existsFilesorFolders.addLib){
                refrenceState.imports +=`\nimport * as func from '#add-lib'; func.default();`
                delete existsFilesorFolders.addLib;
            }
            Object.keys(existsFilesorFolders).forEach(key=>{
                if(existsFilesorFolders[key]){
                    if(key === "components" || key === "layouts"|| key === "pages")
                        refrenceState.props += `${key}:import.meta.glob('/${key}/**/*.vue'),`
                    else
                        refrenceState.props += `${key}:${key}.default,`
            } 
        })
        refrenceState.props += `autoRoutes:autoRoutes,`
        refrenceState.props += `dynamicRoutes:dynamicRoutes`
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        }

        async setupClientRoutes(){
            let paths = await globby([
                'pages'
              ], {expandDirectories: {
                extensions: ['vue']
            },cwd:commonContainer.buildOptions.rootDir, followSymbolicLinks: true});
            let uris = {urls:{},re:{}};
            paths.forEach(path=>{
                let transformedPath = path.split('pages/')[1].replace(/_/g,':').replace('/index.vue','').replace('.vue','');
                if(/:/.test(transformedPath))
                    uris.re[`/${transformedPath}`] =`/${path}`;
                else
                    uris.urls[transformedPath === '' ? '/index':`/${transformedPath}`] = `/${path}`;
            })
            const routes = JSON.stringify(uris);
            let stringifyRoutes =  `const autoRoutes = ${routes};`
            stringifyRoutes+=`const dynamicRoutes = {`
            commonContainer.getAppRoutes().map(route =>stringifyRoutes+= `"${route.path}": ()=> import("tez${getUrl(route.path)}"),`)
            stringifyRoutes+=`};`
            return stringifyRoutes;
        }
    })();