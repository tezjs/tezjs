import { commonContainer } from "@tezjs/common";
import { getImportStatement } from "../functions/get-import-statement";
import { snakeToCamel } from "../functions/snake-to-camel-case";

function getPreComponents(pageSlots:{[key:string]:any},masterPageSlots:{[key:string]:any}){
    let preComponents = new Array<string>();
    let maxPreLoadComponent = commonContainer.tezConfig.payload.page.maxPreLoadComponent;
    if(masterPageSlots && masterPageSlots.header)
        masterPageSlots.header.forEach(item=>{
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
export function depsCodeTemplate(page:any,isPre:boolean = true){
    let components = ``;
    let masterPage='';
    let componentRefs=`{`;
    let masterPageRefs=`{`;
    for(let name of getPreComponents(page.slots,page.masterPageSlots)){
        const propName:string = snakeToCamel(name);
        componentRefs+=`"${name}":${propName},`
        components+=getImportStatement(name,'components');
    }
    componentRefs+= '}';
        
    if(page.layoutName){
        masterPage +=getImportStatement(page.layoutName,'layouts');
        masterPageRefs+=`"${page.layoutName}":${snakeToCamel(page.layoutName)},`
    }
    masterPageRefs+='}';
    let postScript = '';
    if(page.postScript){
        postScript = `postScript: ()=>import("${page.postScript}")`;
        delete page.postScript
    }
        
    return `
        import { registerTezPage } from '@tezjs/vue';
        ${components}
        ${masterPage}
        export default (function(){
        registerTezPage(
            {components:${componentRefs},
            masterPage:${masterPageRefs},
            payload:${JSON.stringify(page)},
            ${postScript}
        }
            );
        })()    `
    
}