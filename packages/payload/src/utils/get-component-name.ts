import { commonContainer } from "@tezjs/common"
export function getComponentName(componentName){
    return commonContainer.getStrapiConfig().componentNames ? commonContainer.getStrapiConfig().componentNames[componentName] : componentName
}