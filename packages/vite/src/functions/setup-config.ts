import { commonContainer } from "@tezjs/common";
import {BuildOptions, TezConfig } from "@tezjs/types";

export async function setupConfig(config:TezConfig | Function){
    let tezConfig = config;
    let clientConfig= undefined;
    if(typeof config === "function"){
        clientConfig =<(buildOptions:BuildOptions)=>TezConfig | Promise<TezConfig>>config(commonContainer.buildOptions) ;
        if(clientConfig instanceof Promise)
            tezConfig = await clientConfig
        else
            tezConfig = clientConfig
    }else
        tezConfig = config;
    if(tezConfig)
        commonContainer.setupConfig(<TezConfig>tezConfig)
}