import { shallowRef,unref } from "vue";
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
        Object.defineProperty(app.config.globalProperties, '$tezRoute', {
            enumerable: true,
            get: () => unref(this.currentRoute),
        });
    }

    changeRouteValue(routeValue:any){
        this.currentRoute.value = routeValue;
    }
})();