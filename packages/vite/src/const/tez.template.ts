import { commonContainer } from "@tezjs/common"
import { ImportState } from "../interface/import-state"

function registerServiceWorker(){
    let code:string = '';
    if(commonContainer.buildOptions.commandName === "build" && commonContainer.tezConfig.pwa){
        code  = `
        if (('serviceWorker' in navigator)) {
            window.addEventListener('load', () => {  
                navigator.serviceWorker.register('/service-worker.js');
            })
        }
        `;
    }
    return code;
}

export const tezTemplate = (importState:ImportState)=>{
    return `
    import { createTezApp } from '@tezjs/vue';
    ${importState.imports}
    createTezApp({
        ${importState.props}
    });
    ${registerServiceWorker()}
    `
}