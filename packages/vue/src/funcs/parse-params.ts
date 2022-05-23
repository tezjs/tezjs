export function parseParams(path:string,rPath:string){
    let splitRoutePath = rPath.split('/');
    let splitPath = path.split('/');
    let params:{[key:string]:string} = {};
    for(let i=0;i<splitRoutePath.length;i++){
        if(/:/g.test(splitRoutePath[i])){
            params[splitRoutePath[i].replace(':','')] = splitPath[i];
        }
    }
    return params;
}