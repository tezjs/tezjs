import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import { ImportState } from "../interface/import-state";
import { tezTemplate } from "./tez.template";

export const appContainer:
    {
        addOrUpdateTezTS():void
    } = new (class {
        tsCodeCache:string
        addOrUpdateTezTS(){
            let pathResolver = new CommonPathResolver();
            let existsFilesorFolders = pathResolver.getExistsFilesOrFolders();
            let refrenceState:ImportState = {imports:'',props:''};
            ['store','router'].forEach(key=> {if(existsFilesorFolders[key]) refrenceState.imports += `import * as ${key} from '#${key}';`});
            if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.imports)
                commonContainer.tezConfig.client.imports.forEach(item=>refrenceState.imports += `import '${item}';`)
            if(existsFilesorFolders.addLib){
                refrenceState.imports +=`\nimport * as func from '#add-lib'; func.default();`
                delete existsFilesorFolders.addLib;
            }
            Object.keys(existsFilesorFolders).forEach(key=>{
                if(existsFilesorFolders[key]){
                    if(key === "components" || key === "layouts")
                        refrenceState.props += `${key}:import.meta.glob('/${key}/**/*.vue'),`
                    else
                        refrenceState.props += `${key}:${key},`
            } 
        })
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        }
    })();