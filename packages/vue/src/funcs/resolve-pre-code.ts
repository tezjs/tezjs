import { componentState } from '../const/component-state';
import { tezPages } from '../const/tez-pages';
import { TezAppOptions } from '../models/tez-app-options';
import { checkAutoRoute } from './check-auto-route';
import { getDynamicRouteScriptUrl, getPreloadScriptUrl, getPreScriptUrl } from './get-preload-script-url';
import {getUrl } from './payload/get-url'
import { preloadDependencies } from './preload';
import { registerDynamicRoutes } from './register-dynamic-routes';
import { registerTezPage } from './register-tez-page';
const WINDOW_TEZ_DATA = "TEZ_DATA";
function registerData(resolve){
    return func=>{
        func(registerTezPage,preloadDependencies);
        resolve(true);
    }
}
export async function resolveRoute(url){
    return resolvePreloadCode(componentState.tezAppOptions,url);
}
export async function resolvePreloadCode(tezAppOptions:TezAppOptions,to?:string){
    return new Promise<Boolean>((resolve,reject)=>{
        let url = getUrl(to);
        if(!tezPages.isExits(url)){
            
            import(/* @vite-ignore */ getPreloadScriptUrl(url)).then(t=>t.default).then(t=>{t(preloadDependencies).then(t=>t.default).then(registerData(resolve))}).catch(failedRoute(url,resolve));
        }
        else
            resolve(true)
    })
}

export async function resolvePreCode(tezAppOptions:TezAppOptions,to?:string){
    return new Promise<Boolean>((resolve,reject)=>{
        let url = getUrl(to);
        if(window[WINDOW_TEZ_DATA]){
            registerData(resolve)(window[WINDOW_TEZ_DATA]);
            delete window[WINDOW_TEZ_DATA];
            return;
        }
        if(!tezPages.isExits(url)){
            import(/* @vite-ignore */getPreScriptUrl(url)).then(t=>t.default).then(registerData(resolve))
            .catch(failedRoute(url,resolve))
            ;
        }
        else
            resolve(true)
    })
}
function resolveDynamicRoute(){
    return new Promise<Boolean>((resolve,reject)=>{
    if(!componentState.tezAppOptions.dynamicRoutes){
         import(/* @vite-ignore */getDynamicRouteScriptUrl()).then(t=>t.default).then(func=> {func(registerDynamicRoutes);resolve(true);})
    }else
        resolve(true)
    });
}
function failedRoute(url,resolve){
    return (reason)=>{
        resolveDynamicRoute().then(isSet=>{
            let dynamicRoutes = componentState.tezAppOptions.dynamicRoutes;
            if(dynamicRoutes && Object.keys(dynamicRoutes).length > 0){
                let route = checkAutoRoute(url);
                if(route.resolvePath){
                    resolvePreloadCode(componentState.tezAppOptions,route.resolvePath).then(t=>{
                        componentState.changeRouteValue({params:route.params})
                        resolve(true)
                    })
                }
            }
        })
    }
}