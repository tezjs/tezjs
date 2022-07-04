import { componentState } from '../const/component-state';
import { tezPages } from '../const/tez-pages';
import { TezAppOptions } from '../models/tez-app-options';
import { getPreloadScriptUrl } from './get-preload-script-url';
import {getUrl } from './payload/get-url'
export async function resolveRoute(url){
    return resolvePreCode(componentState.tezAppOptions,url);
}
export async function resolvePreCode(tezAppOptions:TezAppOptions,to?:string){
    return new Promise<Boolean>((resolve,reject)=>{
        let url = getUrl(to);
        if(!tezPages.isExits(url)){
            /* @vite-ignore */
            import(getPreloadScriptUrl(url)).then(t=>{t.default().then(x=>resolve(true))});
        }
        else
            resolve(true)
    })
}