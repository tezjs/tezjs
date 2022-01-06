import { DataSanitizer } from "../interface/data-sanitizer";

export function runDataSanitizer(dataSanitizers:DataSanitizer[],dataItem:any,url:string,componentName:string){
    if(dataSanitizers){
        dataSanitizers.forEach(santizerConfig=>{
            if(!santizerConfig.urlPattern && !santizerConfig.componentName)
                dataItem = santizerConfig.sanitizer(dataItem);
            else if(santizerConfig.urlPattern && santizerConfig.urlPattern.test(url) && !santizerConfig.componentName)
                dataItem = santizerConfig.sanitizer(dataItem);
            else if(!santizerConfig.urlPattern && santizerConfig.componentName === componentName)
                dataItem = santizerConfig.sanitizer(dataItem);
            else if(santizerConfig.urlPattern && santizerConfig.componentName && santizerConfig.urlPattern.test(url) && santizerConfig.componentName === componentName)
                dataItem = santizerConfig.sanitizer(dataItem);

        })
    }
    return dataItem
}