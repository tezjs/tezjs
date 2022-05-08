export function getComponentName(name:string){
    if(name.indexOf('-') !== -1){
        let dashIndex = name.indexOf('-');
        name = name.substr(dashIndex+1,name.length)
    }
    return name;
}