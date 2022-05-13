import * as path from "path";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "@tezjs/types";
import { Route } from "@tezjs/types";
import { createPath } from "@tezjs/common";
import { getFilterQueryParams } from "../utils/get-filter-query-params";
import getUrl from "../utils/get-url";
import { MasterPageCollection } from "./master-page.collection";
import parseStrapiData from "./parse-strapi-data";
import { RequestService } from "./request.server";
import { writeImage } from "../utils/write-image";
import { BaseGenerator } from "./base-generator";
import { RedirectRoute } from "./redirect-routes";
import { Sitemap } from "./sitemap";
import { commonContainer } from "@tezjs/common"
export class PayloadGenerator extends BaseGenerator{
    private pageCollectionConfig: PageCollectionConfig;
    private masterPageCollection:MasterPageCollection;
    constructor(private requestService: RequestService,redirectRoute:RedirectRoute,sitemap:Sitemap) {
        super(redirectRoute,sitemap);
        const { pageCollectionConfig } = commonContainer.getStrapiConfig();
        this.pageCollectionConfig = pageCollectionConfig;
        this.masterPageCollection = new MasterPageCollection();
    }

    async generate(route: Route, dynamicPageRoute: { [key: string]: any }): Promise<{ [key: string]: any } | null> {
        let url = getUrl(route.path);
        let baseUrl = url;
        let dynamicData = undefined;
        let referenceData = undefined;
        let collectionName = undefined;
        if (dynamicPageRoute[url]) {
            dynamicData = dynamicPageRoute[url].data;
            baseUrl = url;
            referenceData = dynamicPageRoute[url].referenceData;
            collectionName = dynamicPageRoute[url].collectionName;
            url = dynamicPageRoute[url].url;
            
        }
        const directoryPath = path.join(this.pathResolver.payloadPath, baseUrl);
        const isNotExits = createPath(directoryPath);
        if (isNotExits) {
            console.log(baseUrl)
            let filterQuery = {[this.pageCollectionConfig.fieldName.uri]:getUrl(url)};
            if(collectionName)
                filterQuery["ReferencePages"] = collectionName;
            
            const result = await this.requestService.get(`/${this.pageCollectionConfig.name}?${getFilterQueryParams(filterQuery)}`);
            let item = (result && result[0]) ? result[0]:{}
            await this.masterPageCollection.setMasterPageInfo(this.pageCollectionConfig.name,filterQuery,item);
            const page = await parseStrapiData(item, baseUrl, dynamicData,referenceData);
            
            if (page) {
               await this.generatePage(page)
            }
            await this.writeImages();
            return page;
        }
        return null;
    }

    async writeImages(){
        for(const uri of defaultContainer.writeImageUris)
            await writeImage(uri)
    }
}