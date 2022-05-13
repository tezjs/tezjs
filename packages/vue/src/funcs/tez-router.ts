import { createWebHistory,createMemoryHistory, createRouter, RouterOptions } from "vue-router";
import { getRoutes } from "./get-routes";
import { beforeEach } from "./route-guards/before-each";
import { scrollBehavior } from "./scroll-behavior";
export function tezRouter(pageComponent:any,routerOptions:RouterOptions) {
    var routeConfig:any = {history: false ? createMemoryHistory() : createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(routerOptions)
        routeConfig = { ...routeConfig, ...routerOptions };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    const tezRouter = createRouter(routeConfig);
    tezRouter.beforeEach(beforeEach(routeConfig.routes))
    return tezRouter; 
} 