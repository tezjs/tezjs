import { shallowRef,unref } from "vue";
import { Router } from "../domain/router/router";
import { TezAppOptions } from "../models/tez-app-options";

export const componentState:
{
    tezAppOptions:TezAppOptions;
    defineGlobalProps(app:any):void;
    changeRouteValue(routeValue:any);
} = new (class {
    tezAppOptions:TezAppOptions=undefined;
    currentRoute= shallowRef({params:{}});
    defineGlobalProps(app:any){
        app.config.globalProperties.$tezRouter = new Router();
        Object.defineProperty(app.config.globalProperties, '$tezRoute', {
            enumerable: true,
            get: () => unref(this.currentRoute),
        });
    }

    changeRouteValue(routeValue:any){
        this.currentRoute.value = routeValue;
    }
})();