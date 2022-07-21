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
            preComponents.push(item.name);maxPreLoadComponent--;
        } });
        if(pageSlots && pageSlots.default){
            for(var i=0;i<maxPreLoadComponent;i++){
                if(pageSlots.default.length > i && preComponents.filter(x=>x===pageSlots.default[i].name).length === 0)
                    preComponents.push(pageSlots.default[i].name)
            }
                
    }
    return preComponents;
}
export function depsCodeTemplate(page:any,route:any,isPre:boolean = true){
    let components = ``;
    let masterPage='';
    let componentRefs=`{`;
    let masterPageRefs=`{`;
    for(let name of getPreComponents(page.slots,page.masterPageSlots,isPre)){
        const propName:string = snakeToCamel(name);
        componentRefs+=`"${name}":${propName},`
        components+=getImportStatement(name,'components');
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
    delete page.postScript
    return `
        ${components}
        ${masterPage}
        export default function(registerTezPage,preload){

            registerTezPage({
                components:${componentRefs},
                masterPage:${masterPageRefs},
                payload:${JSON.stringify(page)},
                ${postScript}
            })
        }    `
    
}