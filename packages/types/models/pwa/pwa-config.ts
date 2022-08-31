import { ServiceWorkerCacheRule } from "./service-worker-cache-rule";

export interface PwaConfig{
    config?:{[key:string]:any};
    cache?:ServiceWorkerCacheRule;    
    htmlElementConfig?:{
        appleTouchIcon:{sizes:string,href:string}
        themeColor:string
    }
}