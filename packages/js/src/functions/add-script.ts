export function addScript(url:string){
    return ()=>{
        const head = document.getElementsByTagName("head")[0];
        const scriptElement = document.createElement("script");
        scriptElement.src=  url;
        head.appendChild(scriptElement)
    }
}