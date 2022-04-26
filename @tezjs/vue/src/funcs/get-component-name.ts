export function getComponentName(name:string){
    let splitText:string[] = name.split("-");
    splitText = splitText.splice(1,splitText.length);
    return splitText.join("-");
}