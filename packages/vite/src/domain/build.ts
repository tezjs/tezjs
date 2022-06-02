import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import {build as viteBuild,mergeConfig, UserConfig} from 'vite'
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { readConfig } from "../functions/read-config";
import { getHtmlTemplate } from "./html/get-html-template";
export  async function build(){
    await readConfig();
    let tezConfig = commonContainer.tezConfig;
    const pathResolver = new CommonPathResolver();
    let template = getHtmlTemplate(tezConfig.htmlMeta);
    writeFileSync(pathResolver.indexHtmlPath,template,true);
    const userConfig = tezConfig.viteOptions || {};
    const viteConfig:UserConfig = mergeConfig(
    VITE_SERVER_CONFIG(),{...userConfig,...{mode:'production'}}
)
await viteBuild(viteConfig);
pathResolver.removeDirSync(pathResolver.indexHtmlPath)
}