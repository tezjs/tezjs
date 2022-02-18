import qs from "qs";
export function qsStringify(filterJson:string){
return qs.stringify(filterJson,{
    encodeValuesOnly: true,
  })
}