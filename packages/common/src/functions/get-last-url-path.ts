import * as path from 'path';
export function getUrlLastPath(url:string){
    let lastUrlNode = url;
    if(url){
        let splitUrl = url.split(/\/|\\/);
        lastUrlNode = path.sep + splitUrl[splitUrl.length - 1];
    }
    return lastUrlNode
}