import { isBot } from "../is-bot";
import { idleCallback } from "../request-idle-callback";
import { subscribe } from "../subscribe";

export function afterUserInteraction(){
    if(!isBot())
        idleCallback(subscribe(),{ timeout: 2e3 })
}

