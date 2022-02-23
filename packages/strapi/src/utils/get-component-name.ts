import { defaultContainer } from "../const/core.const";

export function getComponentName(componentName){
    return defaultContainer.moduleOptions.componentNames ? defaultContainer.moduleOptions.componentNames[componentName] : componentName
}