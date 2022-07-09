import { componentState } from "../const/component-state";

export function getVersion(){
  return window.localStorage.getItem("tzV");
}
export function getPreloadScriptUrl(url:string){
    return componentState.tezAppOptions.isDevMode ? `/tez/deps${url}/preload?v=${getVersion()}` : `/assets${url}/preload.js`
}