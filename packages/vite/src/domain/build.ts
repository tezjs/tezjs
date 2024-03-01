import { commonContainer, CommonPathResolver, convertDateToTicks } from "@tezjs/common";
import {build as viteBuild,mergeConfig, UserConfig} from 'vite'
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { readConfig } from "../functions/read-config";
import { PageCollection,GlobWriter  } from "@tezjs/payload";
import { writeDepsAndGlob } from "../functions/write-deps";
import { addUpdateInputs } from "../functions/add-update-inputs";
import { appContainer } from "../const/container.const";
import { BuildConfig } from "../interface/build-config";
export  async function build(config?:BuildConfig){
    if(config)
        commonContainer.buildOptions = {buildVersion:convertDateToTicks(new Date()), mode: config.mode, rootDir: config.rootDir || process.cwd(), port: 3000, commandName:"build" };
    await readConfig();
    appContainer.addOrUpdateTezTS()
			
    const globWriter = new GlobWriter()
    await globWriter.setComponents();
    await globWriter.setLayoutComponents();
    globWriter.write();
    
    let tezConfig = commonContainer.tezConfig;
    const pathResolver = new CommonPathResolver();
    const userConfig = tezConfig.viteOptions || {};
    let inputs = writeDepsAndGlob(pathResolver);
    const buildInput = {
            build:{
                rollupOptions:{
                    input:addUpdateInputs(inputs,pathResolver)
                }
            }
        }
        let viteConfig:UserConfig = mergeConfig(
        VITE_SERVER_CONFIG(),{...userConfig,...{mode:'production'}}
    )
            viteConfig= mergeConfig(viteConfig,buildInput)
    if(!config || !config.configOnly)
        await viteBuild(viteConfig);
    else
        return viteConfig;
}