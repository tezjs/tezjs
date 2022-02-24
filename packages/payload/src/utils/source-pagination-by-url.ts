import { DATA_CONTROL_GET_RECORD, FIELD_DATA_TYPE_RESULT } from "../const/app.const";
import { defaultContainer } from "../const/core.const";

export function sourcePaginationByUrl(url:string,componentName:string,item:any){
    const sourcePaginationByUrl = defaultContainer.moduleOptions.optimization?.sourcePaginationByUrl;
    let isPass:boolean = false;
    if (sourcePaginationByUrl) {
        if (sourcePaginationByUrl.filter(t=> (t.url=== url && (t.components.length === 0 || t.components === undefined)) || (t.url=== url && t.components.filter(x=>x=== componentName).length > 0)).length > 0 && item[FIELD_DATA_TYPE_RESULT] !== DATA_CONTROL_GET_RECORD) 
        isPass = true;
    }
    return isPass;
}