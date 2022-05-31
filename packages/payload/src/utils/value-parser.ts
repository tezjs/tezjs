import { BLANK } from "../const/app.const";
import { EXTRACT_CURLY_BRACKETS_STRING, REMOVE_CURLY_BRACKETS } from "../const/app.regex";
import isObject from "./is-object";

export function parseObjectValue(jObject:{[key:string]:any},item:any){
    Object.keys(jObject).forEach(key=>{
        if(Array.isArray(jObject[key]))
        {
            for(let i=0;i<jObject[key].length;i++)
                jObject[key][i] = isObject(jObject[key][i]) ? parseObjectValue(jObject[key][i],item) : parseValue(jObject[key][i],item)
        }else if(isObject(jObject[key])){
            jObject[key] = parseObjectValue(jObject[key],item)
        }else{
            jObject[key] = parseValue(jObject[key],item);
            if(jObject[key] && typeof jObject[key] === "string")
                jObject[key] = jObject[key].replace(/"/g,"'");
        }
    })
    return jObject;
}

function parseValue(value:string,item){
    if(EXTRACT_CURLY_BRACKETS_STRING.test(value) && value){
        let matches = value.match(EXTRACT_CURLY_BRACKETS_STRING);
        matches.forEach(key=>{
            let func = new Function(...["t"],`return t.${key.replace(REMOVE_CURLY_BRACKETS,BLANK).replace(/[.]/g,'?.')};`);
            var parsedValue = func(item.referencePageData);
            value = value.replace(key,parsedValue);
        })
    }
    return value;
}