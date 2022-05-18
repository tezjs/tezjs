import { idleCallback } from "../request-idle-callback";
import { subscribe } from "../subscribe";

export function afterUserInteraction(funcs:Function[]){
idleCallback(subscribe(funcs),{ timeout: 2e3 })
}

