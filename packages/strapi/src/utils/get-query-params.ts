import { defaultContainer } from "../const/core.const";
import { QUERY_PARAMS } from "../const/query-params.const";
import { getQueryString } from './get-query-string';
import isObject from './is-object';

export function getQueryParams(name:string | string[],value:any = "") {
    const strapiVersion = defaultContainer.moduleOptions.version;
    let queryParamsObject = undefined;
    let names:string[] =typeof name === "string" ? [name]:name; 
    let queryString:string= '';
    names.forEach(name=>{
        queryParamsObject = QUERY_PARAMS[strapiVersion][name];
        if(queryParamsObject){
            queryParamsObject = getParams(queryParamsObject,value);
           queryString+= getQueryString(queryParamsObject);
           queryString+="&"
        }
    });
    return queryString;
}

function getParams(queryParamsObject:{[key:string]:any},value:any){
    var jObject = {};
    Object.keys(queryParamsObject).forEach(key=>{
            if (Array.isArray(queryParamsObject[key])) {
                jObject[key] = getParams(queryParamsObject[key],value);
            } else if(isObject(queryParamsObject[key])) {
                jObject[key] = getParams(queryParamsObject[key],value);
            } else
            jObject[key] = typeof queryParamsObject[key] === "function"? queryParamsObject[key](value):queryParamsObject[key];
    })
    return jObject;
}