import { commonContainer } from "@tezjs/common";
import { mergeConfig } from "vite";
import { VITE_SERVER_CONFIG } from "../const/vite-server-config.const";
import { readConfig } from "../functions/read-config";

export async function dev(config?:{isSsr?:boolean}){
    if(!commonContainer.buildOptions)
    commonContainer.buildOptions = {buildVersion:0, mode: "", rootDir: process.cwd(), port: 3000, commandName:"dev" };
    await readConfig();
    let additionalConfig={root:commonContainer.buildOptions.rootDir};
    let viteConfig = mergeConfig(VITE_SERVER_CONFIG(),additionalConfig);
    if(!config ||(config && !config.isSsr))
        delete viteConfig.server.middlewareMode;
    return viteConfig;
}