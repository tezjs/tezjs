import { SEO_POPULATE } from "../const/app.const";
import { getFilterQueryParams } from "../utils/get-filter-query-params";
import { RequestService } from "./request.server";

export class MasterPageCollection{
    private request:RequestService;
    constructor(){
        this.request = new RequestService();
    }

    async setMasterPageInfo(uri:string,filterJson:{[key:string]:any},item:{[key:string]:any}) {
        let result = await this.request.get(`/${uri}?${getFilterQueryParams(filterJson,SEO_POPULATE)}`);
        item.masterPage = result[0].masterPage;
        item.seo = result[0].seo;
    }
}