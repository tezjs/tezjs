import { commonContainer, getPath, PayloadReader, writeFileSync } from "@tezjs/common";
import { depsCodeTemplate } from "../../const/deps-code";
import { getComponentName } from "../../functions/get-component-name";
import getUrl from "../../functions/get-url";
import { getPreloadCodeTemplate } from "../../functions/preload-code-template";
export class JsCodeGen extends PayloadReader{
    postSlots:{slots:any,masterPageSlots:any} = {slots:{},masterPageSlots:{}};
        
    constructor(public route:{name:string,path:string,fPath:string}){
        super(route);
    }

    isPostCode(){
        return (Object.keys(this.postSlots.masterPageSlots).length > 0 || Object.keys(this.postSlots.slots).length > 0);
    }
    gen() {
        let preloadCode = getPreloadCodeTemplate();
        let preCode = this.preCode();
        let postCode = this.postCode();
        const preFile = getPath([this.commonPath.getPath([this.commonPath.depsPath, this.route.fPath]),"pre.ts"]);
        const preloadFile = getPath([this.commonPath.getPath([this.commonPath.depsPath, this.route.fPath]),"preload.ts"]);
        writeFileSync(preloadFile,preloadCode,true)
        writeFileSync(preFile,preCode,true)
        if(this.isPostCode){
            const postFile = getPath([this.commonPath.getPath([this.commonPath.depsPath, this.route.fPath]),"post.ts"]);
            writeFileSync(postFile,postCode,true)
        }
            
    }


    preCode() {
        return depsCodeTemplate(
            {
                url:this.route.path,
                slots:this.getSlots(this.components,true),
                masterPageSlots:this.getSlots(this.masterPage,false),
                tags:this.tags,
                layoutName:this.masterPage.layoutName,
                postScript: this.isPostCode ? commonContainer.buildOptions.commandName === "dev"? `/tez/deps${getUrl(this.route.path)}/post` :'./post.js' : ''
            }
        );
    }

    postCode() {
        return depsCodeTemplate(
            {
                url:this.route.path,
                slots:this.postSlots.slots,
                masterPageSlots:this.postSlots.masterPageSlots,
            }
        );
    }

    getSlots(page:any,isPageSlot:boolean= true){
        let pageSlot = {};
        if(page.slots){
               const slots = Object.keys(page.slots);
               for(const slotName of slots)
               {
                  let components = page.slots[slotName];
                  let itemCount = 0;
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
                    if(slotName === "default" && isPageSlot &&  itemCount >= (commonContainer.tezConfig.payload.page.maxPreLoadComponent)){
                        if(!this.postSlots.slots[slotName])
                            this.postSlots.slots[slotName] = []
                        this.postSlots.slots[slotName].push({
                            name:componentName,data:this.getData(itemName), id:itemName
                        });
                    }else if(slotName === "footer" && !isPageSlot){
                        if(!this.postSlots.masterPageSlots[slotName])
                        this.postSlots.masterPageSlots[slotName] = []
                    this.postSlots.masterPageSlots[slotName].push({
                        name:componentName,data:data, id:itemName
                    });
                    }
                    itemCount++;
                  }
               }
         }
         return pageSlot;
    }
}