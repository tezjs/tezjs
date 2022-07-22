import { componentState } from '../const/component-state';
import { tezPages } from '../const/tez-pages';
import { TezAppOptions } from '../models/tez-app-options';
import { getPreloadScriptUrl, getPreScriptUrl } from './get-preload-script-url';
import {getUrl } from './payload/get-url'
import { preloadDependencies } from './preload';
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
            
            import(/* @vite-ignore */ getPreloadScriptUrl(url)).then(t=>t.default).then(t=>{t(preloadDependencies).then(t=>t.default).then(registerData(resolve))});
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
            import(/* @vite-ignore */getPreScriptUrl(url)).then(t=>t.default).then(registerData(resolve));
        }
        else
            resolve(true)
    })
}