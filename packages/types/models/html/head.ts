import { TezSeo } from "../seo/seo";

export interface Head extends TezSeo{
    favicon?:string;
    preloads?:Array<{path:string,type?:"module"}>
}