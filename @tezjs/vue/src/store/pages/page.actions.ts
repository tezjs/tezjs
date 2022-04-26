import { getComponentName } from "../../funcs/get-component-name";
import { getJsonPayload } from "../../funcs/payload/get-json-payload";
import { setSlots } from "./page.func";

export default {

  async addPage(context:any,payload:any){
    const pages = context.state.pages;
    const masterPages = context.state.masterPages;
    pages[payload.url] = payload.page;
    if(payload.page && payload.page.masterPage && !masterPages[payload.page.masterPage]){
      let masterPage = await getJsonPayload(payload.page.masterPage,"/master-pages");
      masterPages[payload.page.masterPage] = masterPage
      setSlots(context,payload.url,"masterPage",payload.page.masterPage)
    }
    context.commit("setMasterPages",masterPages);
    context.commit("setPages",pages);
   },

  async changePageUrl(context:any,url:string){
      setSlots(context,url,"page")
      context.commit("setActivePageUrl",url)
   }

}