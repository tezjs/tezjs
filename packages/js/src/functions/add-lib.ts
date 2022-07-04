import { jsContainer } from "../const/container.const";
import { ThirdPartyLibConfig } from "../models/third-party-lib-config";

export function addLib(config:ThirdPartyLibConfig){
return ()=>{
    if(config.afterUserInteraction)
        jsContainer.addAfterInteration(config.afterUserInteraction)
        
}
}