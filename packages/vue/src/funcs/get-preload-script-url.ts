import { componentState } from "../const/component-state";

export function getVersion(){
  return window.localStorage.getItem("tzV");
}
export function getPreloadScriptUrl(url:string){
    return componentState.tezAppOptions.isDevMode ? `/tez/deps${url}/preload.js?v=${getVersion()}` : `/assets${url}/preload.js`
}

export function getPreScriptUrl(url:string){
  return componentState.tezAppOptions.isDevMode ? `/tez/deps${url}/pre.js?v=${getVersion()}` : `/assets${url}/pre.js`
}