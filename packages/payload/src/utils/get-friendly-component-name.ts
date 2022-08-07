import { BLANK, UNDERSCORE } from "../const/app.const";
import { REMOVE_SPECIAL_CHARACTERS } from "../const/app.regex";

export function getFriendlyComponentName(name:string){
    for(var replacer of ["pages/","components/","layouts/"])
        name = name.replace(replacer,BLANK);
    return name.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE)
}