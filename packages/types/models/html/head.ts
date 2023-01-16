import { TezSeo } from "../seo/seo";
import { ScriptTag } from "./script";
import { StyleTag } from "./style";

export interface Head extends TezSeo{
    inlineStyle?:Array<{name:string,code:string}>;
    inlineScript?:Array<{name:string,code:string}>;
    favicon?:string;
    preloads?:Array<{path:string,type?:string}>;
    script?:Array<ScriptTag>;
    style?:Array<StyleTag>;
    preConnect?:Array<string>;
    preFetchDns?:Array<string>;
    preFetch?:Array<string>;
    links?:Array<{[key:string]:string}>;
    handler?:{
        preloads?:(url:string,pagePayload:any)=>Array<{path:string,type?:string}>
        code:(route:any)=>string;
    }
}