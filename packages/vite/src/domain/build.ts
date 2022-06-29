import { commonContainer, CommonPathResolver } from "@tezjs/common";
import {build as viteBuild,mergeConfig, UserConfig} from 'vite'
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { readConfig } from "../functions/read-config";
import { appContainer } from "../const/container.const";
import { PageCollection } from "@tezjs/payload";
import getUrl from "../functions/get-url";
export  async function build(){
    await readConfig();
			const pageCollection = new PageCollection();
      		await pageCollection.generate();
    let tezConfig = commonContainer.tezConfig;
    const pathResolver = new CommonPathResolver();
    const userConfig = tezConfig.viteOptions || {};
    const routes = commonContainer.getAppRoutes();
    var clearDist = true;
    for(const route of routes){
        appContainer.addOrUpdateTezTS(route)

        const buildInput = {
            build:{
                emptyOutDir: clearDist,
                rollupOptions:{
                    input:{
                        [`${getUrl(route.path).replace('/',"")}`]:pathResolver.getFilePath([pathResolver.cachePath],"tez.ts")
                    }
                }
            }
        }
        let viteConfig:UserConfig = mergeConfig(
        VITE_SERVER_CONFIG(),{...userConfig,...{mode:'production'}}
    )
            viteConfig= mergeConfig(viteConfig,buildInput)
    await viteBuild(viteConfig);
    clearDist = false;
    }
    
}