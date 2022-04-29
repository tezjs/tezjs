import store from "../../store";
import { getUrl } from "../get-url";
import { getJsonPayload } from "../payload/get-json-payload";
import {setMetaInfo } from '../set-meta-tags'
const PAGE_STATE:{[key:string]:any} = {}
export async function beforeEach(to:any, from:any) {
    if(window.location.hostname.indexOf("localhost") !== -1)
      await fetch(`/routes?path=${to.path}`);
    let url = getUrl(to.path);
    let isBindMetaTags = Object.keys(PAGE_STATE).length !== 0;
    if(!PAGE_STATE[url]){
      var data = await getJsonPayload('',to.path);
      await store.dispatch("page/addPage",{url:url,page:data})
      PAGE_STATE[url] = true;
    }
    if(isBindMetaTags || window.location.hostname.indexOf("localhost") !== -1){
      setMetaInfo(await getJsonPayload('tags',to.path))
    }
    setTimeout(async function(){ await store.dispatch("page/changePageUrl",url)})
    return true;
    }