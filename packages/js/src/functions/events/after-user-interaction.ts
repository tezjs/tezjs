import { isBot } from "../is-bot";
import { idleCallback } from "../request-idle-callback";
import { subscribe } from "../subscribe";

export function afterUserInteraction(funcs:Function[]){
    if(!isBot())
        idleCallback(subscribe(funcs),{ timeout: 2e3 })
}

