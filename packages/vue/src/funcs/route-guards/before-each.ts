import { componentState } from "../../const/component-state";
import {store} from "../../store";
import { checkAutoRoute } from "../check-auto-route";
import { getUrl } from "../get-url";
import { getJsonPayload } from "../payload/get-json-payload";
import {setMetaInfo } from '../set-meta-tags'
const PAGE_STATE:{[key:string]:any} = {}
export  function beforeEach(routes:any,autoRoutes:{urls:{[key:string]:any},re:{[key:string]:{cPath:string,re:RegExp}}}) {
  return async (to:any, from:any)=>{

  if(window.location.hostname.indexOf("localhost") !== -1)
      await fetch(`/routes?path=${to.path}`);
    let url = getUrl(to.path);
    let route = await checkAutoRoute(url);
    let routeItem = componentState.tezAppOptions.dynamicRoutes[getUrl(url)];
    if(routeItem !== undefined){
      let isBindMetaTags = Object.keys(PAGE_STATE).length !== 0;
      if(!PAGE_STATE[url]){
        var data = await getJsonPayload('',to.path);
        if(data && !data.masterPage && route.layoutName)
            data.masterPage = {layoutName:route.layoutName,slots:{}};
        await store.dispatch("page/addPage",{url:url,page:data,pageComponent:route.pageComponent})
        PAGE_STATE[url] = true;
      }
      if(isBindMetaTags || window.location.hostname.indexOf("localhost") !== -1){
        setMetaInfo(await getJsonPayload('tags',to.path))
      }
      setTimeout(async function(){ await store.dispatch("page/changePageUrl",url)})
    }else if(route.cPath){
      await store.dispatch("page/addPage",{url:url,page:{slots:{},masterPage:{layoutName:route.layoutName,slots:{}},pageComponent:route.pageComponent}})
      setTimeout(async function(){ await store.dispatch("page/changePageUrl",url)})
    }else if(routeItem.seo)
        setMetaInfo(routeItem.seo)
    return true;
}
  
    }