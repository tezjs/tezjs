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
}