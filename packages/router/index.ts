import { createWebHistory,createMemoryHistory, createRouter, RouterOptions } from "vue-router";
import { getRoutes } from "./src/funcs/get-routes";
import { scrollBehavior } from "./src/funcs/scroll-behavior";
export function tezRouter(pageComponent:any,options?:{ssr:boolean,routerOptions:RouterOptions}){
    var routeConfig:any = {history: options && options.ssr ? createMemoryHistory() : createWebHistory(),scrollBehavior:scrollBehavior,routes:[]};
    if(options && options.routerOptions)
        routeConfig = { ...routeConfig, ...options.routerOptions };
    routeConfig.routes = getRoutes(routeConfig.routes,pageComponent);
    return createRouter(routeConfig); 
}