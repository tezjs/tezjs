import { componentState } from "../const/component-state";
import { getLayoutName } from "./get-layout-name";
import { match } from 'path-to-regexp'

const urlMatch =(path:string)=> match(path, {
    decode: decodeURIComponent,
  });
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
                    const matchPattern = urlMatch(url);
                    let matchPath = matchPattern(path)
                    if(matchPath)
                    {
                        route.cPath = componentState.tezAppOptions.autoRoutes.re[url];
                        params = matchPath.params;
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