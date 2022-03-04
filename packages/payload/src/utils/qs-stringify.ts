import * as qs from "qs";
export function qsStringify(filterJson:any){
return qs.stringify(filterJson,{
    encodeValuesOnly: true,
  })
}