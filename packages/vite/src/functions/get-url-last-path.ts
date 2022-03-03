export function getUrlLastPath(url:string){
    let lastUrlNode = url;
    if(url){
        let splitUrl = url.split("/");
        lastUrlNode = "/" + splitUrl[splitUrl.length - 1];
    }
    return lastUrlNode
}