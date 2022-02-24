import qs from "qs";
export function getQueryString(queryParamsObject:{[key:string]:any}){
       return qs.stringify(
        queryParamsObject
        ,{
            encodeValuesOnly: true,
          })
}