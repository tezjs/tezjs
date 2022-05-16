import { commonContainer, CommonPathResolver, writeFileSync } from "@tezjs/common";
import { TezConfig } from "@tezjs/types";
import {build as viteBuild,mergeConfig, UserConfig} from 'vite'
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { getHtmlTemplate } from "./html/get-html-template";
import { tez } from "./tez";
export  async function build(tezConfig:TezConfig,rootPath:string){
    commonContainer.setupConfig(tezConfig,rootPath);
    const pathResolver = new CommonPathResolver();
    let template = getHtmlTemplate(tezConfig.htmlPageConfig);
    writeFileSync(pathResolver.indexHtmlPath,template,true);
    const userConfig = tezConfig.viteOptions || {};
    VITE_SERVER_CONFIG.plugins.push(tez(tezConfig,rootPath))
const viteConfig:UserConfig = mergeConfig(
    VITE_SERVER_CONFIG,{...userConfig,...{root:rootPath,mode:'production'}}
)
await viteBuild(viteConfig);
pathResolver.removeDirSync(pathResolver.indexHtmlPath)
}