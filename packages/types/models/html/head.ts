import { TezSeo } from "../seo/seo";

export interface Head extends TezSeo{
    preConnects?:string[]
    inlineStyle?:Array<{name:string,code:string}>;
    inlineScript?:Array<{name:string,code:string}>;
    favicon?:string;
    preloads?:Array<{path:string,type?:"module"}>
}