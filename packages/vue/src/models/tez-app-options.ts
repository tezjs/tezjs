import { RouterOptions } from "vue-router";
import { ModuleTree } from "vuex";

export interface TezAppOptions {
    
    components?:Record<string, () => Promise<{
        [key: string]: any;
      }>>;

    layouts?:Record<string, () => Promise<{
        [key: string]: any;
      }>>;

    pages?:Record<string, () => Promise<{
        [key: string]: any;
      }>>;
    
    routerOptions?:RouterOptions;

    store?:ModuleTree<unknown>;

    useVue?:(vue:any)=>void;

    autoRoutes?:{urls:{[key:string]:any},re:{[key:string]:any}};

    dynamicRoutes?:{[key:string]:any};
    
    isDevMode?:boolean;

    loaderImagePath?:string;
    
}