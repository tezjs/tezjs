import { isObject } from "./is-object";

export function getLayoutPageName(page:any){
    if(page && page.masterPage && isObject(page.masterPage) && page.masterPage.layoutName)
        return page.masterPage.layoutName;
    else if(page && page.masterPage && typeof page.masterPage === "string")
        return page.masterPage;
}