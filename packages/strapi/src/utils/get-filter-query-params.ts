import { defaultContainer } from "../const/core.const";
import { getQueryString } from "./get-query-string";

export function getFilterQueryParams(filterJson:{[key:string]:any},populate:any="*"){
    const version = defaultContainer.moduleOptions.version;
    if(version === 4)
    {
        let jObject = {};
        Object.keys(filterJson).forEach(key=>{
            jObject[key] = {
                '$eq':filterJson[key]
            }
        });
        return getQueryString({filters:jObject,populate:populate});
    } else {
        return getQueryString(filterJson)
    }
}