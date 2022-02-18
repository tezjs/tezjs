import { defaultContainer } from "../const/core.const";
import { QUERY_PARAMS } from "../const/query-params.const";
import { getQueryString } from './get-query-string';
import isObject from './is-object';

export function getQueryParams(name:string,value:any = "") {
    const strapiVersion = defaultContainer.moduleOptions.version;
    let queryParamsObject = QUERY_PARAMS[strapiVersion][name];
    if(queryParamsObject){
        queryParamsObject = getParams(queryParamsObject,value);
       return getQueryString(queryParamsObject);
    }
    return '';
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