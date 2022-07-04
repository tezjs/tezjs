import { idleCallback } from "@tezjs/js";
import { AfterInteractionConfig } from "../models/after-interaction-config";

function importScripts(scripts:string[]){
return ()=>{
    scripts.forEach(scriptPath=>import(scriptPath).then(t=>t.default()))
}
}

export function afterInteraction(config:AfterInteractionConfig){
        if(config.scripts)
            idleCallback(importScripts(config.scripts))
}