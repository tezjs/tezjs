export function getUrlLastPath(url:string, splitCharacter:string = "/"){
    let lastUrlNode = url;
    if(url){
        let splitUrl = url.split(splitCharacter);
        lastUrlNode = splitCharacter + splitUrl[splitUrl.length - 1];
    }
    return lastUrlNode
}