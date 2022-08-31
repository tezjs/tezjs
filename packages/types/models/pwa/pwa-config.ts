import { ServiceWorkerCacheRule } from "./service-worker-cache-rule";

export interface PwaConfig{
    config?:{[key:string]:any};
    cache?:ServiceWorkerCacheRule;    
}