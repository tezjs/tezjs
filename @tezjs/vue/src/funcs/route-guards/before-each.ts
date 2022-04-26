import store from "../../store";
import { getUrl } from "../get-url";
import { getJsonPayload } from "../payload/get-json-payload";
const PAGE_STATE:{[key:string]:any} = {}
export async function beforeEach(to:any, from:any) {
    var x = await fetch("/routes");
    let url = getUrl(to.path);
    if(!PAGE_STATE[url]){
      var data = await getJsonPayload('',to.path);
     await store.dispatch("page/addPage",{url:url,page:data})
      PAGE_STATE[url] = true;
    }
    setTimeout(async function(){ await store.dispatch("page/changePageUrl",url)})
    return true;
    }