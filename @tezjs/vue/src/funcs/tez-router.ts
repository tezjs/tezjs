import { createWebHistory,createMemoryHistory, createRouter, RouterOptions } from "vue-router";
import { getRoutes } from "./get-routes";
import { beforeEach } from "./route-guards/before-each";
import { scrollBehavior } from "./scroll-behavior";
export function tezRouter(pageComponent:any,options?:{ssr?:boolean,routerOptions?:Partial<RouterOptions>}) {
    var routeConfig:any = {history: options && options.ssr ? createMemoryHistory() : createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(options && options.routerOptions)
        routeConfig = { ...routeConfig, ...options.routerOptions };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    const router = createRouter(routeConfig);
    router.beforeEach(beforeEach(routeConfig.routes))
    return router; 
} 