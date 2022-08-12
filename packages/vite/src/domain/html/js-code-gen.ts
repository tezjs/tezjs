import { commonContainer, getPath, PayloadReader, writeFileSync } from "@tezjs/common";
import { EXPORT_DEFAULT, POST_SCRIPT_COMMENT, WINDOW_TEZ_DATA } from "../../const/core.const";
import { depsCodeTemplate } from "../../const/deps-code";
import { routeComponentWriter } from "../../const/route-component-writer";
import { getComponentName } from "../../functions/get-component-name";
import getUrl from "../../functions/get-url";
import { getPreloadCodeTemplate, postScriptPreloadCodeTemplate } from "../../functions/preload-code-template";
export class JsCodeGen extends PayloadReader{
    postSlots:{slots:any,masterPageSlots:any} = {slots:{},masterPageSlots:{}};
        
    constructor(public route:{name:string,path:string,fPath:string,isPage:boolean}){
        super(route);
    }

    isPostCode(){
        return (Object.keys(this.postSlots.masterPageSlots).length > 0 || Object.keys(this.postSlots.slots).length > 0);
    }
    gen() {
        let writePath = commonContainer.buildOptions.commandName === "build" ? this.commonPath.distPath:this.commonPath.depsPath;
        let preCode = this.preCode();
        let postCode = this.postCode();
        let preloadCode = getPreloadCodeTemplate(routeComponentWriter.getPreDeps(this.route.path),this.commonPath);
        let postScriptPreload = postScriptPreloadCodeTemplate(routeComponentWriter.getPostDeps(this.route.path),this.commonPath)
        const preFile = getPath([this.commonPath.getPath([writePath, this.route.fPath]),this.commonPath.preScriptName]);
        const preloadFile = getPath([this.commonPath.getPath([writePath, this.route.fPath]),this.commonPath.preloadScriptName]);
        preCode = preCode.replace(POST_SCRIPT_COMMENT,postScriptPreload)
        writeFileSync(preloadFile,preloadCode,true)
        if(commonContainer.buildOptions.commandName === "build"){
            const preInlineFile = getPath([this.commonPath.getPath([writePath, this.route.fPath]),"pre.inline.js"]);
            const preInlineCode = preCode.replace(EXPORT_DEFAULT,WINDOW_TEZ_DATA);
            writeFileSync(preInlineFile,preInlineCode,true)
        }
        writeFileSync(preFile,preCode,true)
        if(this.isPostCode){
            const postFile = getPath([this.commonPath.getPath([writePath, this.route.fPath]),this.commonPath.postScriptName]);
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
                postScript: this.isPostCode ? commonContainer.buildOptions.commandName === "dev" ? `/tez/deps${getUrl(this.route.path)}/post.js` : `./${this.commonPath.postScriptName}` : ''
            },this.route,true,this.route.isPage
        );
    }

    postCode() {
        return depsCodeTemplate(
            {
                url:this.route.path,
                slots:this.postSlots.slots,
                masterPageSlots:this.postSlots.masterPageSlots,

            },this.route,
            false
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
                        let jObject = {
                            name:componentName,data:data,id:itemName
                         }
                         if(data && data.mobileComponentName)
                            jObject["mobileComponentName"] = data.mobileComponentName;
                      pageSlot[slotName].push(jObject);
                    if(slotName === "default" && isPageSlot &&  itemCount >= (commonContainer.tezConfig.payload.page.maxPreLoadComponent)){
                        if(!this.postSlots.slots[slotName])
                            this.postSlots.slots[slotName] = []
                            jObject = {
                                name:componentName,data:this.getData(itemName), id:itemName
                            };
                            if(jObject.data && jObject.data.mobileComponentName)
                            jObject["mobileComponentName"] = jObject.data.mobileComponentName;
                        this.postSlots.slots[slotName].push(jObject);
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