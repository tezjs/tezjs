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
            let existsFilesorFolders = this.pathResolver.getExistsFilesOrFolders();
            if(!this.importState){
                ["useVue"].forEach((key) => {
                    if (existsFilesorFolders[key])
                      refrenceState.imports += `import ${key} from '/@/${key === "useVue" ? "plugins":key}';`;
                  });
                if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.imports)
                    commonContainer.tezConfig.client.imports.forEach(item=>refrenceState.imports += `import '${item}';`)
                
                
                if(existsFilesorFolders.addLib){
                    refrenceState.imports +=`\nimport addLib from '/@/add-lib'; addLib();`
                    delete existsFilesorFolders.addLib;
                }
            }else
                refrenceState = this.importState;
        refrenceState.props=this.getProps(existsFilesorFolders)
        let tsCode = tezTemplate(refrenceState);
        if(this.tsCodeCache !== tsCode)
            writeFileSync(this.pathResolver.tezTsPath,tsCode,true);
        this.tsCodeCache = tsCode;
        this.importState = refrenceState;
        return refrenceState;
        }

        getProps(existsFilesorFolders:{
            components: boolean;
            layouts: boolean;
            router: boolean;
            store: boolean;
            addLib: boolean;
            useVue: boolean;
            pages: boolean;
        }){
            let props = '';
            if(commonContainer.tezConfig.client && commonContainer.tezConfig.client.loaderImage)
                props += `loaderImagePath:"${commonContainer.tezConfig.client.loaderImage}",`
            props+=`isDevMode:${commonContainer.buildOptions.commandName === "dev"},`
            if(existsFilesorFolders.useVue)
                props += `useVue:useVue,`;
            props+=`buildVersion:${commonContainer.buildOptions.buildVersion}`
            return props;
        }
    })();