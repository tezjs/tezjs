import { isObject } from "../../funcs/is-object";
import { getJsonPayload } from "../../funcs/payload/get-json-payload";
import { setSlots } from "./page.func";

export default {

  async addPage(context:any,payload:any){
    const pages = context.state.pages;
    const masterPages = context.state.masterPages;
    pages[payload.url] = payload.page;
    if(payload.page && payload.page.masterPage){
      let masterPageName:string = '';
      if(typeof payload.page.masterPage === "string" && !masterPages[payload.page.masterPage]){
        let masterPage = await getJsonPayload(payload.page.masterPage,"/master-pages");
        masterPages[payload.page.masterPage] = masterPage;
        masterPageName = payload.page.masterPage;
      }else if(isObject(payload.page.masterPage)){
        masterPages[payload.page.masterPage.layoutName] = payload.page.masterPage;
        masterPageName = payload.page.masterPage.layoutName;
      }
      setSlots(context,payload.url,"masterPage",masterPageName)
    }
    context.commit("setMasterPages",masterPages);
    context.commit("setPages",pages);
   },

  async changePageUrl(context:any,url:string){
      setSlots(context,url,"page")
      context.commit("setActivePageUrl",url)
   }

}