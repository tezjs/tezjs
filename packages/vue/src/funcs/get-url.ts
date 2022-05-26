export function getUrl(url:any) {
    if(url && url.length > 1 && url.substr(url.length-1,url.length) === '/')
        url = url.substr(0,url.length-1);
    return url === "/" ? "/index" : url === "/index" ? "/" : url;
}
