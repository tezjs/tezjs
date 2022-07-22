import { commonContainer } from "@tezjs/common";
import { snakeToCamel } from "./snake-to-camel-case";
export function getImportStatement(name:string,path:string){
    return  `import ${snakeToCamel(name)} from ${commonContainer.buildOptions.commandName === "build" ? `"/assets/${name}.${path === "components"?"component":"layout"}.js"` : `"/@/${path}/${name}.vue"`};`
}