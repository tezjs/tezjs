import { commonContainer } from "@tezjs/common";
import { getFriendlyComponentName } from "@tezjs/payload";
import { snakeToCamel } from "./snake-to-camel-case";

export function getImportStatement(name:string,path:string){
    let buildComponentSuffix = {
        components:'component',
        pages:'page',
        layouts:'layout'
    }
    return  `import ${snakeToCamel(name)} from ${commonContainer.buildOptions.commandName === "build" ? `"/assets/${getFriendlyComponentName(name)}.${buildComponentSuffix[path]}.js"` : `"/@/${path}/${name.replace("pages/","")}.vue"`};`
}