export function getComponentName(name:string){
    if(name.indexOf('-') !== -1){
        let splitText:any = name.split("-");
        if(!isNaN(splitText[0])){
            let dashIndex = name.indexOf("-");
            name = name.substr(dashIndex + 1, name.length);
        }
    }
    return name;
}