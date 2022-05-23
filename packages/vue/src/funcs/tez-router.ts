import { createWebHistory,createMemoryHistory, createRouter, RouterOptions } from "vue-router";
import { TezAppOptions } from "../models/tez-app-options";
import { getRoutes } from "./get-routes";
import { beforeEach } from "./route-guards/before-each";
import { scrollBehavior } from "./scroll-behavior";
export function tezRouter(pageComponent:any,tezAppOptions:TezAppOptions) {
    let routerOptions:RouterOptions = tezAppOptions.routerOptions;
    var routeConfig:any = {history: false ? createMemoryHistory() : createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(routerOptions)
        routeConfig = { ...routeConfig, ...routerOptions };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    const tezRouter = createRouter(routeConfig);
    tezRouter.beforeEach(beforeEach(routeConfig.routes,tezAppOptions.autoRoutes))
    return tezRouter; 
} 