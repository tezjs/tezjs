import { componentState } from "../const/component-state";
import { getLayoutName } from "./get-layout-name";

const urlMatch =(urlPatten:string,url:string)=> {
    const RIGHT_SLASH = '/'
    const splitUPattern = urlPatten.split(RIGHT_SLASH);
    const splitUrl = url.split(RIGHT_SLASH);
    let isMatched:boolean = splitUPattern.length === splitUrl.length;
    let params:{[key:string]:any} = {};
    if(isMatched)
    for(let i=0;i<splitUPattern.length;i++){
        if(/:/.test(splitUPattern[i]))
        {
            params[splitUPattern[i].replace(':','')] = splitUrl[i];
            isMatched = true
        }else
            isMatched = splitUPattern[i].toLowerCase() === splitUrl[i].toLowerCase();
        if(!isMatched)
        break;
    }
    
    return isMatched ? {params:params} : isMatched; 
};
export function checkAutoRoute(path:string){
    let route:{resolvePath?:string,params?:{[key:string]:any},layoutName?:string} = {}
    if(componentState.tezAppOptions.dynamicRoutes){
        {
                const urlPattern = Object.keys(componentState.tezAppOptions.dynamicRoutes);
                for(const url of urlPattern){
                    const match = urlMatch(url,path);
                    if(match)
                    {
                        route.resolvePath = componentState.tezAppOptions.dynamicRoutes[url];
                        route.params = (<{
                            params: {
                                [key: string]: any;
                            };
                        }>match).params;
                        break;
                    }
                }
        }
        
    }
    return route;
}