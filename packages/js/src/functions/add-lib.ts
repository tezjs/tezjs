import { jsContainer } from "../const/container.const";
import { LibConfig } from "@tezjs/types";
import { deepMerge } from "./deep-merge";

export function addLib(config:LibConfig){
return (additionalConfig?:LibConfig)=>{
    if(config && additionalConfig)
    config = deepMerge(config,additionalConfig);
    if(config.afterUserInteraction)
        jsContainer.addAfterInteration(config.afterUserInteraction)
     return config;   
}
}