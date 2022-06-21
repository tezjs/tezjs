import { getImportStatement } from "../functions/get-import-statement";

function getPreComponents(pageSlots:{[key:string]:any},masterPageSlots:{[key:string]:any}){
    let preComponents = new Array<string>();
    if(masterPageSlots && masterPageSlots.header)
        masterPageSlots.header.forEach(item=>preComponents.push(item.name));
    if(pageSlots && pageSlots.default)
        pageSlots.default.forEach(item=>preComponents.push(item.name));
    return preComponents;
}
export function preCodeTemplate(page:any){
    let components = ``;
    let masterPage='';
    let componentRefs=`{`;
    let masterPageRefs=`{`;
    for(let name of getPreComponents(page.slots,page.masterPageSlots)){
        componentRefs+=`${name}:${name},`
        components+=getImportStatement(name,'components');
    }
    componentRefs+= '}';
        
    if(page.masterPage){
        masterPage +=getImportStatement(page.masterPage,'layouts');
        masterPageRefs+=`${page.masterPage}:${page.masterPage},`
    }
    masterPageRefs+='}';
    
    return `
        import { registerTezPage } from '@tezjs/vue';
        ${components}
        ${masterPage}

        registerTezPage(
            {components:${componentRefs},masterPage:${masterPageRefs},payload:${JSON.stringify(page)}}
            );

            `
    
}