export function addStylesheet(href:string){
    return ()=>{
        const head = document.getElementsByTagName("head")[0];
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =href
        link.media = "all";
        head.appendChild(link);
    }
}