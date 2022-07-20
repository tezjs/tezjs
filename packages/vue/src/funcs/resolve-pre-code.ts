import { componentState } from '../const/component-state';
import { tezPages } from '../const/tez-pages';
import { TezAppOptions } from '../models/tez-app-options';
import { getPreloadScriptUrl, getPreScriptUrl } from './get-preload-script-url';
import {getUrl } from './payload/get-url'
import { registerTezPage } from './register-tez-page';
function registerData(resolve){
    return func=>{
        func(registerTezPage);
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
            /*! @vite-ignore */
            import(getPreloadScriptUrl(url)).then(t=>t.default).then(t=>{t().then(t=>t.default).then(registerData(resolve))});
        }
        else
            resolve(true)
    })
}

export async function resolvePreCode(tezAppOptions:TezAppOptions,to?:string){
    return new Promise<Boolean>((resolve,reject)=>{
        let url = getUrl(to);
        if(!tezPages.isExits(url)){
            /* @vite-ignore */
            import(getPreScriptUrl(url)).then(t=>t.default).then(registerData(resolve));
        }
        else
            resolve(true)
    })
}