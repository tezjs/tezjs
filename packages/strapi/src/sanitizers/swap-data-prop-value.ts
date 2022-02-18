
import isObject from "../utils/is-object";
export function swapDataPropValue(jObject:any){
    let jsonObject:any = {}
    if(Array.isArray(jObject) && jObject[0] && isObject(jObject[0])){
        let items:any[] = [];
        jObject.forEach(item=>{
            items.push(swapDataPropValue(item));
        })
        return items
    } else if(jObject && isObject(jObject))
    {
        Object.keys(jObject).forEach(key =>{
            if(Array.isArray(jObject[key]) && jObject[key][0] && isObject(jObject[key][0])){
                let items:any[] = [];
                jObject[key].forEach(item=>{
                        items.push(swapDataPropValue(item));
                })
                if(key === "data")
                jsonObject = items;
                else
                jsonObject[key] = items;                
            }else if(isObject(jObject[key]) ){
                if(key === "data")
                    jsonObject = swapDataPropValue(jObject[key]);
                else
                    jsonObject[key] = swapDataPropValue(jObject[key]);
            }else
                jsonObject[key] = jObject[key]
        })
    }
    return jsonObject;
}