import { jsContainer } from "../const/container.const";
import { ThirdPartyLibConfig } from "../models/third-party-lib-config";

export function addLib(config:ThirdPartyLibConfig){
return (additionalConfig?:ThirdPartyLibConfig)=>{
    if(additionalConfig && additionalConfig.afterUserInteraction){
        if(config && config.afterUserInteraction)
            additionalConfig.afterUserInteraction.forEach(item=>config.afterUserInteraction.push(item))
    }

    if(config.afterUserInteraction)
        jsContainer.addAfterInteration(config.afterUserInteraction)
        
}
}