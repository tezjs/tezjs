import { componentState } from '../const/component-state';

export function registerDynamicRoutes(routes:{[key:string]:string}){
    componentState.tezAppOptions.dynamicRoutes = routes;
}