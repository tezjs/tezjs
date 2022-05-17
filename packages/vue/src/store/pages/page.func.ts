import { getComponentName } from "../../funcs/get-component-name";

export function setSlots(context:any,url:string,type:string,pageName?:string){
    let pagePropName = type === "page"? "pages" : "masterPages";
    let slotPropName = type === "page"? "pageSlots":"masterPageSlots";
    let commitEventName = type==="page"? "setPageSlots" : "setMasterPageSlots";
    let page =  context.state[pagePropName][pageName || url];
      if(page.slots){
         let pageSlot = context.state[slotPropName][pageName || url];
         if(!pageSlot){
            const slots = Object.keys(page.slots);
            for(const slotName of slots)
            {
               let components = page.slots[slotName];
               for(const componentItem of components){
                  let itemName = componentItem[componentItem.length > 1 ? 1: 0];
                  let componentName:string = getComponentName(itemName);
                  let data:{[key:string]:any} = componentItem.length > 1 ? componentItem[0]: undefined;
                  if(!pageSlot)
                     pageSlot = {};
                  if(!pageSlot[slotName])
                     pageSlot[slotName] = []
                  pageSlot[slotName].push({
                        path:`/components/${componentName}.vue`,data:data,itemName:itemName
                     });
               }
            }
            context.state[slotPropName][pageName || url] = pageSlot;
            context.commit(commitEventName,context.state[slotPropName]);
         }
      }
}