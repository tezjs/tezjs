import { componentState } from "../const/component-state";

export function getVersion(){
  return window.localStorage.getItem("tzV");
}
export function getPreloadScriptUrl(url:string){
    return componentState.tezAppOptions.isDevMode ? `/tez/deps${url}/preload.js?v=${getVersion()}` : `${url}/preload.js`
}

export function getPreScriptUrl(url:string){
  return componentState.tezAppOptions.isDevMode ? `/tez/deps${url}/pre.js?v=${getVersion()}` : `${url}/pre.js`
}

export function getDynamicRouteScriptUrl(){
  return componentState.tezAppOptions.isDevMode ? `/tez/deps/dynamic-routes.js?v=${getVersion()}` : `/assets/dynamic-routes.js`
}