import { jsContainer } from "../const/container.const";
import { LibConfig } from "@tezjs/types";

export function addLib(config:LibConfig){
return (additionalConfig?:LibConfig)=>{
    if(additionalConfig && additionalConfig.afterUserInteraction){
        if(config && config.afterUserInteraction)
            additionalConfig.afterUserInteraction.forEach(item=>config.afterUserInteraction.push(item))
    }

    if(config.afterUserInteraction)
        jsContainer.addAfterInteration(config.afterUserInteraction)
     return config;   
}
}