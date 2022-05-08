import { createWebHistory,createMemoryHistory, createRouter } from "vue-router";
import { TezRouterOptions } from "../models/tez-router-options";
import { getRoutes } from "./get-routes";
import { beforeEach } from "./route-guards/before-each";
import { scrollBehavior } from "./scroll-behavior";
export function tezRouter(pageComponent:any,options?:{ssr?:boolean,routerOptions?:Partial<TezRouterOptions>}) {
    var routeConfig:any = {history: options && options.ssr ? createMemoryHistory() : createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(options && options.routerOptions)
        routeConfig = { ...routeConfig, ...options.routerOptions };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    const router = createRouter(routeConfig);
    router.beforeEach(beforeEach(routeConfig.routes))
    return router; 
} 