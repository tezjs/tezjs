import { RouterOptions } from "vue-router";

export interface TezRouterConfig{
    defaultRouteComponent:any
    options?:{
        ssr?:boolean,
        routerOptions?:Partial<RouterOptions>
    }
}