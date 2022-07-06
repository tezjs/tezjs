export function isLocalNetwork(hostname = window.location.hostname) {
    return (
      (['localhost', '127.0.0.1', '', '::1'].includes(hostname))
      || (hostname.startsWith('192.168.'))
      || (hostname.startsWith('10.0.'))
      || (hostname.endsWith('.local'))
    )
  }
export function getVersion(){
  return window.localStorage.getItem("tzV");
}
export function getPreloadScriptUrl(url:string){
    return isLocalNetwork() ? `/tez/deps${url}/preload?v=${getVersion()}` : `/assets${url}/preload.js`
}