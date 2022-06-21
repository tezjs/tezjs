import { snakeToCamel } from "./snake-to-camel-case";
export function getImportStatement(name:string,path:string){
    return `import ${snakeToCamel(name)} from '/@/${path}/${name}.vue';`
}