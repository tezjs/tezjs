import { afterUserInteraction } from "../functions/events/after-user-interaction";
import { JsContainerConfig } from "../models/js-container-config";

export const jsContainer:
    {
        addAfterInteration(funcs:Function[]):void;
        config:JsContainerConfig;
    } = new (class {
        config:JsContainerConfig = {afterInteration:{eventSubscribed:false,funcs:new Array<Function>()}};
        addAfterInteration(funcs:Function[]){
            if(funcs.length>0 && !this.config.afterInteration.eventSubscribed){
                this.config.afterInteration.eventSubscribed = true;
                afterUserInteraction()
            }
            funcs.forEach(func=>this.config.afterInteration.funcs.push(func));
            
        }
    })();