import { LibConfig } from "@tezjs/types";

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
    
    useVue?:(vue:any)=>void;

    autoRoutes?:{urls:{[key:string]:any},re:{[key:string]:any}};

    dynamicRoutes?:{[key:string]:any};
    
    isDevMode?:boolean;

    loaderImagePath?:string;
    
    buildVersion?:number;

    maxPreComponentCount?:number;

    libConfig?:LibConfig;
}