import { commonContainer } from "@tezjs/common";
import { routeComponentWriter } from "./route-component-writer";
import { getImportStatement } from "../functions/get-import-statement";
import { snakeToCamel } from "../functions/snake-to-camel-case";
import { POST_SCRIPT_COMMENT } from "./core.const";

function getPreComponents(pageSlots:{[key:string]:any},masterPageSlots:{[key:string]:any},isPre:boolean){
    let preComponents = new Array<string>();
    let maxPreLoadComponent =isPre? commonContainer.tezConfig.payload.page.maxPreLoadComponent : pageSlots && pageSlots.default ? pageSlots.default.length : 0;
    let propName = isPre?'header':'footer'
    if(masterPageSlots && masterPageSlots[propName])
        masterPageSlots[propName].forEach(item=>{
        if(preComponents.filter(x=>x!==pageSlots.default[i].name).length === 0){
            preComponents.push(item.name);
        } });
        if(pageSlots && pageSlots.default){
            for(var i=0;i<maxPreLoadComponent;i++){
                if(pageSlots.default.length > i && preComponents.filter(x=>x===pageSlots.default[i].name).length === 0){
                    if(pageSlots.default[i].mobileComponentName)
                        preComponents.push(pageSlots.default[i].mobileComponentName);
                    preComponents.push(pageSlots.default[i].name)
                }
                
            }
                
    }
    return preComponents;
}
export function depsCodeTemplate(page:any,route:any,isPre:boolean = true, isPage:boolean=false){
    let components = ``;
    let masterPage='';
    let componentRefs=`{`;
    let masterPageRefs=`{`;
    let componentPropName:string = ''
    for(let name of getPreComponents(page.slots,page.masterPageSlots,isPre)){
        const propName:string = snakeToCamel(name);
        componentPropName = propName;
        componentRefs+=`"${name}":${propName},`
        components+=getImportStatement(name,name.indexOf("pages/") === -1 ?'components' : "pages");
        routeComponentWriter.addComponent(route.path,name,isPre,false)
    }
    componentRefs+= '}';
        
    if(page.layoutName){
        masterPage +=getImportStatement(page.layoutName,'layouts');
        masterPageRefs+=`"${page.layoutName}":${snakeToCamel(page.layoutName)},`
        routeComponentWriter.addComponent(route.path,page.layoutName,isPre,true)
    }
    masterPageRefs+='}';
    let postScript = '';
    if(page.postScript){
        if(commonContainer.buildOptions.commandName=== "dev")
            postScript = `postScript: ()=>import("${page.postScript}")`;
        else
            postScript = `postScript: ${POST_SCRIPT_COMMENT}`
    }

    if(isPage){
        page.layoutName = `${componentPropName}.layout ? {[${componentPropName}.layout]:import("/@/layouts/${componentPropName}.layout")}:{}`
    }
    delete page.postScript
    return `
        ${components}
        ${masterPage}
        export default function(registerTezPage,preload){
            const payload = ${JSON.stringify(page)}; 
            registerTezPage({
                components:${componentRefs},
                masterPage:${isPage ?`${componentPropName}.layoutName ? {[${componentPropName}.layoutName]:()=>import(${`/* @vite-ignore */"/@/layouts/"+${componentPropName}.layoutName+".vue"`}).then(t=>t.default)}:{}` :masterPageRefs},
                payload:${isPage?`{...payload,...{isPage:${isPage},layoutName:${componentPropName}.layoutName,tags:${componentPropName}.head}}`:`payload`},
                ${postScript}
            })
        }    `
    
}