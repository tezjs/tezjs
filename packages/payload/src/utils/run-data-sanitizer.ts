import { DataSanitizer } from "@tezjs/types";

export function runDataSanitizer(dataSanitizers:DataSanitizer[],dataItem:any,url:string,componentName:string,parentComponentName?:string){
    
    if(dataSanitizers){
        dataSanitizers.forEach(santizerConfig=>{
            if(santizerConfig.toPass && santizerConfig.toPass(url,componentName,parentComponentName))
                dataItem = santizerConfig.sanitizer(dataItem);
            else if (santizerConfig.toPass === undefined && santizerConfig.sanitizer)
                dataItem = santizerConfig.sanitizer(dataItem);
        })
    }
    return dataItem
}