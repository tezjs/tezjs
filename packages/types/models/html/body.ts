import { ScriptTag } from "./script";
import { StyleTag } from "./style";

export interface BodyTag {
    inlineScript?:Array<{name:string,code:string}>
    script?:Array<ScriptTag>;
    style?:Array<StyleTag>;
}