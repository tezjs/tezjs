export function addPreCacheAssets(){

    let message = getMessage();
    if(message)
        navigator.serviceWorker.getRegistration().then(( registration ) => {
            if('active' in registration && navigator.onLine) {
                registration.active.postMessage(message)
            }
        }) 
}
function getMessage(){
    return window["TEZ_PRE_CACHE_ASSETS"];
}