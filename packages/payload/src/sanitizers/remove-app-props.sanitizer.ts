import isObject from "../utils/is-object";

export function removeAppProps(jObject:any) {
    let igNoreAppKeys = ["queryParams","collectionType"];
    let jsonObject = {};
    if(Array.isArray(jObject)){
        let items:any[] = [];
        jObject.forEach(item=>items.push(removeAppProps(item)))
        return items;
    }else if(isObject(jObject)){
        Object.keys(jObject).forEach(key=>{
            if(igNoreAppKeys.indexOf(key) === -1){
                if(Array.isArray(jObject[key])){
                    let items:any[] = [];
                    jObject[key].forEach(item=>{
                        if(isObject(item))
                        items.push(removeAppProps(item))
                        else
                        items.push(item)
                    })
                    jsonObject[key] =  items;
                }else if(isObject(jObject[key])){
                    jsonObject[key] = removeAppProps(jObject[key])
                }else
                    jsonObject[key] = jObject[key];
            }
        })
    }
    return jsonObject;
}