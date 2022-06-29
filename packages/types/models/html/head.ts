import { TezSeo } from "../seo/seo";

export interface Head extends TezSeo{
    preConnects?:string[]
    inlineStyle?:{[key:string]:string};
    inlineScript?:{[key:string]:string};
    favicon?:string;
    preloads?:Array<{path:string,type?:"module"}>
}