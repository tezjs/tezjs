import { VUE_COMPONENT_NAME, VUE_REFERENCE_CODE } from "../const/app.const";
import removeSpace from "../sanitizers/remove-space.sanitizer";
import { getComponentName } from "./get-component-name";
import { commonContainer } from "@tezjs/common"
export function getPagePrePostComponents(collection:any[]):any[]{
    var result:any =[];
    if(collection){
        let moduleOptions = commonContainer.getStrapiConfig();
        collection.forEach((item:any)=>{
            let componentName = removeSpace(item[VUE_REFERENCE_CODE] || item[VUE_COMPONENT_NAME]);
            let splitComponentNames = componentName.split(",");
            componentName = getComponentName(splitComponentNames[0]);
            let mobileComponentName = getComponentName(splitComponentNames[1]);
            if (splitComponentNames.length === 1 && componentName)
                result.push([{},componentName])
            else if(splitComponentNames.length === 2 && componentName && mobileComponentName)
                result.push([{ mobileComponentName:mobileComponentName,clientComponentName:componentName  },componentName])
        })
    }
    return result;
}