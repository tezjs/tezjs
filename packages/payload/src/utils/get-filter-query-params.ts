import { getQueryString } from "./get-query-string";
import { commonContainer } from "@tezjs/common"
export function getFilterQueryParams(filterJson:{[key:string]:any},populate:any="*"){
    const version = commonContainer.getStrapiConfig().version;
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