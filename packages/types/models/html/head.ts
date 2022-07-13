import { TezSeo } from "../seo/seo";
import { ScriptTag } from "./script";
import { StyleTag } from "./style";

export interface Head extends TezSeo{
    preConnects?:string[]
    inlineStyle?:Array<{name:string,code:string}>;
    inlineScript?:Array<{name:string,code:string}>;
    favicon?:string;
    preloads?:Array<{path:string,type?:"module"}>;
    script?:Array<ScriptTag>;
    style?:Array<StyleTag>;
}