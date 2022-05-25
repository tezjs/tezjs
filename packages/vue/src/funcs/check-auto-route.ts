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
export async function checkAutoRoute(path:string){
    let route:{cPath?:string,params?:{[key:string]:any},layoutName?:string,pageComponent?:any} = {}
    if(componentState.tezAppOptions.autoRoutes){
        let componentPath = componentState.tezAppOptions.autoRoutes.urls[path.toLowerCase()];
        route.cPath = componentPath;
        let params ={};
        if(!route.cPath && componentState.tezAppOptions.autoRoutes.re)
        {
                const urlPattern = Object.keys(componentState.tezAppOptions.autoRoutes.re);
                for(const url of urlPattern){
                    const match = urlMatch(url,path);
                    if(match)
                    {
                        route.cPath = componentState.tezAppOptions.autoRoutes.re[url];
                        params = (<{
                            params: {
                                [key: string]: any;
                            };
                        }>match).params;
                        break;
                    }
                }
        }
        componentState.changeRouteValue({params:params})
        if(route.cPath){
            const { layoutName, pageComponent } = await getLayoutName(route.cPath);
            route.layoutName = layoutName;
            route.pageComponent = pageComponent;
        }
             
    }
    return route;
}