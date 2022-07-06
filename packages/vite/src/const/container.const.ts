import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import getUrl from "../functions/get-url";
import { ImportState } from "../interface/import-state";
import { RouteBuild } from "../interface/route-build";
import { tezTemplate } from "./tez.template";

export const appContainer:
    {
        addOrUpdateTezTS(route?:{name:string,fPath:string,path:string}):void
        build:RouteBuild;
        versionId:number;
    } = new (class {
        tsCodeCache:string
        importState:ImportState;
        versionId:number = 1;
        pathResolver = new CommonPathResolver();
        build:RouteBuild = {route:{path:'',fPath:''}};
        async addOrUpdateTezTS(route?:{name:string,fPath:string,path:string}){
            this.build.route = route;
            
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
            }else
                refrenceState = this.importState;
        
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(this.pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        this.importState = refrenceState;
        return refrenceState;
        }
    })();