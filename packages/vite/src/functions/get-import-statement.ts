import { commonContainer } from "@tezjs/common";
import { getFriendlyComponentName } from "@tezjs/payload";
import { getInputOptionName } from "./get-input-option-name";
import { snakeToCamel } from "./snake-to-camel-case";

export function getImportStatement(name:string,path:string){
    let buildComponentSuffix = {
        components:'component',
        pages:'page',
        layouts:'layout'
    }
    let componentPath : string = `"/@/${path}/${name.replace("pages/","")}.vue"`;
    if(commonContainer.buildOptions.commandName === "build")
        componentPath = `"${getInputOptionName(`/assets/${getFriendlyComponentName(name).toLowerCase()}.${buildComponentSuffix[path]}`)}.js"`    
    return  `import ${snakeToCamel(name)} from ${componentPath};`
}