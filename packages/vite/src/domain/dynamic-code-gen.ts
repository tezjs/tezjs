import { PayloadReader  } from "@tezjs/common";
import { BLANK } from "../const/core.const";
import { preCodeTemplate } from "../const/pre-code";
import { getComponentName } from "../functions/get-component-name";

export class DynamicCodeGen{
    payloadReader:PayloadReader;
    constructor(){
        this.payloadReader = new PayloadReader();
    }
    getCode(path:string){
        path = path.replace(/tez/,BLANK);
        let parsedPath = path.split('/').join('\\')
        let page = this.getPage(parsedPath,path);
        return preCodeTemplate(page)  ;
    }

    getPage(path:string,url:string){
        let page = this.payloadReader.readPayloadFile(path,path.split('\\').pop()) as {[key:string]:any};
        let payload = {url:url,slots:this.getSlots(page),masterPageSlots:{},tags:{},masterPage:''}
        if(page && page.masterPage){
            let masterPage = this.payloadReader.readMasterPage(page.masterPage)as {[key:string]:any};
            payload.masterPageSlots = this.getSlots(masterPage)
            payload.masterPage = masterPage.layoutName;
        }
        payload.tags = this.payloadReader.readPayloadFile(path,'tags');
        
        return payload;
    }

    getSlots(page:any){
        let pageSlot = {};
        if(page.slots){
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
                           name:componentName,data:data,id:itemName
                        });
                  }
               }
         }
         return pageSlot;
    }
}