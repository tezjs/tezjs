import { ThirdPartyLibConfig } from "../models/third-party-lib-config";
import { afterUserInteraction } from "./events/after-user-interaction";

export function addLib(config:ThirdPartyLibConfig){
return ()=>{
    if(config.afterUserInteraction)
        afterUserInteraction(config.afterUserInteraction)
}
}