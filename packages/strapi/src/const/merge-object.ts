import isArray from "../utils/is-array";
import isObject from "../utils/is-object";

export function deepMerge(object:any,source:any){
Object.keys(source).forEach(prop=>{
    if(object[prop] === undefined)
        object[prop] = source[prop];
    else if(isObject(source[prop]))
        deepMerge(object[prop],source[prop]);
    else if (isArray(source[prop]))
        object[prop] = source[prop];
    else
        object[prop] = source[prop];
});
return object;
}