import { afterUserInteraction } from "@tezjs/js";
import { cacheState } from "../const/cache-state";
import { componentState } from "../const/component-state";

let isExecuted: boolean = false;
export function runAddLib() {
    if (!isExecuted) {
        isExecuted = true;
        setTimeout(()=>{
            let libConfig = componentState.tezAppOptions.libConfig;
            const preCache = ()=>cacheState.preCacheRoutes();
            if(!libConfig)
                componentState.tezAppOptions.libConfig = {afterUserInteraction:[preCache]}
            else if(!libConfig.afterUserInteraction)
                libConfig.afterUserInteraction = [preCache]
            else if(libConfig.afterUserInteraction)
                libConfig.afterUserInteraction.push(preCache)

            if(componentState.tezAppOptions.libConfig){
                if(libConfig.runOn){
                    let idleTime = libConfig.runOn.idleTime;
                    for(let idleTimeFunc of idleTime){
                        idleTimeFunc();
                    }
                }
                if(libConfig.afterUserInteraction)
                    afterUserInteraction(libConfig.afterUserInteraction)
            }
        },2500)
    }
}