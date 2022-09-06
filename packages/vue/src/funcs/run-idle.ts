import { componentState } from "../const/component-state";

let isExecuted: boolean = false;
export function runAddLib() {
    if (!isExecuted) {
        isExecuted = true;
        setTimeout(()=>{
            if(componentState.tezAppOptions.libConfig){
                const libConfig = componentState.tezAppOptions.libConfig;
                if(libConfig.runOn){
                    let idleTime = libConfig.runOn.idleTime;
                    for(let idleTimeFunc of idleTime){
                        idleTimeFunc();
                    }
                }
            }
        },2500)
    }
}