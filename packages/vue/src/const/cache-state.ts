import { idleCallback } from "@tezjs/js";
import { VNode } from "vue";
import { getUrl } from "../funcs/payload/get-url";
import { resolveRoute } from "../funcs/resolve-pre-code";
import { componentState } from "./component-state";

export const cacheState:
{
    layoutVNode:{[key:string]:VNode};
    pageVnodes:{[key:string]:{[key:string]:VNode}};
    getVNode(id:string):VNode;
    cacheVNode(id:string,vNode:VNode):VNode;
    addRoute(route:string):void;
    preCacheRoutes():void;
} = new (class {
    layoutVNode:{[key:string]:VNode}
    pageVnodes:{[key:string]:{[key:string]:VNode}}
    cachedRoute:{[key:string]:boolean}
    routes:{[key:string]:boolean}
    cachedRouteCount:number;
    constructor(){
        this.layoutVNode = {};
        this.pageVnodes = {};
        this.cachedRoute = {};
        this.routes = {};
        this.cachedRouteCount = 0;
    }

    addRoute(route:string) {
        const clientConfig = componentState.tezAppOptions.clientConfig;
        if(clientConfig?.preCache?.route){
            const routeConfig = clientConfig?.preCache?.route;
            route = route.toLowerCase()
            const isCache  = routeConfig === true || routeConfig.test(route);
            if(!this.cachedRoute[route] && !this.routes[route] && isCache){
                this.routes[route] = true
                if(this.cachedRouteCount > 0)
                    idleCallback(()=>this.preCacheRoutes(route),{timeout:10})
            }
        }
    }

    preCacheRoutes(routePath?:string){
        const routes  = routePath ? [routePath] : Object.keys(this.routes);
        for(const route of routes){
            delete this.routes[route];
            resolveRoute(route);
            this.cachedRoute[route] = true;
            this.cachedRouteCount++;
        }
    }

    cacheVNode(id:string,vNode:VNode){
        let url = getUrl();
        if(!this.pageVnodes[url])
            this.pageVnodes[url] = {};
        this.pageVnodes[url][id] = vNode
        return vNode;
    }
    getVNode(id:string){
        let url = getUrl();
        if(!this.pageVnodes[url]) return;
        return this.pageVnodes[url][id];
    }
    
})();