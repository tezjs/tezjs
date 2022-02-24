import { createWebHistory, createRouter, RouterOptions } from "vue-router";
import { getRoutes } from "./src/funcs/get-routes";
import { scrollBehavior } from "./src/funcs/scroll-behavior";
export function tezRouter(pageComponent:any,options?:RouterOptions){
    var routeConfig:any = {history:createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(options)
        routeConfig = { ...routeConfig, ...options };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    return createRouter(routeConfig);
}