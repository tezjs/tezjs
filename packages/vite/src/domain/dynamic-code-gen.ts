import { commonContainer, CommonPathResolver, PayloadReader, writeFileSync  } from "@tezjs/common";
import { BLANK } from "../const/core.const";
import { preCodeTemplate } from "../const/pre-code";
import { getComponentName } from "../functions/get-component-name";
import getUrl from "../functions/get-url";
import * as path from "path";
export class DynamicCodeGen{
    payloadReader:PayloadReader;
    commonPath:CommonPathResolver;
    constructor(){
        this.payloadReader = new PayloadReader();
        this.commonPath = new CommonPathResolver();
    }
    genDeps(){
        const routes = commonContainer.getAppRoutes();
        routes.forEach(route=>{
            let url = getUrl(route.path)
            const preFile = path.join(this.commonPath.getPath([this.commonPath.depsPath, url]),"pre.ts");
            writeFileSync(preFile,this.getCode(url),true)
        })
    }

    getCode(path:string){
        let parsedPath = path.split('/').join('\\')
        let page = this.getPage(parsedPath,path);
        return preCodeTemplate(page);
    }

    getPage(path:string,url:string){
        let page = this.payloadReader.readPayloadFile(path,path.split('\\').pop()) as {[key:string]:any};
        let payload = {url:url,slots:this.getSlots(page),masterPageSlots:{},tags:{},layoutName:''}
        if(page && page.masterPage){
            let masterPage = this.payloadReader.readMasterPage(page.masterPage)as {[key:string]:any};
            payload.masterPageSlots = this.getSlots(masterPage)
            payload.layoutName = masterPage.layoutName;
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