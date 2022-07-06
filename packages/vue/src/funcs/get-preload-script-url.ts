export function getVersion(){
  return window.localStorage.getItem("tzV");
}
export function getPreloadScriptUrl(url:string){
    return !import.meta.env.PROD ? `/tez/deps${url}/preload?v=${getVersion()}` : `/assets${url}/preload.js`
}