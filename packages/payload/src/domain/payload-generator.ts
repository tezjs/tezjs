import axios from "axios";
import path from "path";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "@tezjs/types";
import { PayloadConfig } from "@tezjs/types";
import { Route } from "@tezjs/types";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import { createPath } from "@tezjs/common";
import { getFilterQueryParams } from "../utils/get-filter-query-params";
import { getQueryParams } from "../utils/get-query-params";
import getUrl from "../utils/get-url";
import { getPagePrePostComponents } from "../utils/pre-post-layout";
import { writeFileSync } from "../utils/write-file";
import { MasterPageCollection } from "./master-page.collection";
import parseStrapiData from "./parse-strapi-data";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";

export class PayloadGenerator {
    private pageCollectionConfig: PageCollectionConfig;
    private pathResolver: PathResolver;
    private payload:PayloadConfig;
    private masterPageCollection:MasterPageCollection;
    constructor(private requestService: RequestService) {
        const { pageCollectionConfig, payloadRootPath,payload } = defaultContainer.moduleOptions;
        this.pageCollectionConfig = pageCollectionConfig;
        this.pathResolver = new PathResolver();
        this.payload = payload;
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
            const preLoadJson:{names:string[],data:string[]} = {names:[],data:[]};
            if (page) {
                let componentIds = [];
                let preComponentCount = page.sections.length;
                page.sections.forEach(section=>preLoadJson.names.push(section[section.length -1]))
                for (let j = 0; j < page.components.length; j++) {
                    const component = page.components[j];
                    let componentId = `${j}-${component.name}`
                    componentIds.push(componentId);
                    const filePath = path.join(
                        directoryPath,
                        componentId + ".json"
                    );
                    //component.data.clientComponentName = component.name;
                    
                    page.sections.push((this.payload.page.maxPreLoadComponent - preComponentCount) > j  ? [component.data,componentId] : [componentId])
                    preLoadJson.names.push(component.name)
                    if((this.payload.page.maxPreLoadComponent - preComponentCount) < j)
                    await writeFileSync(filePath, component.data);
                    if((this.payload.page.maxPreLoadComponent - preComponentCount) <= j)
                        preLoadJson.data.push(componentId)
                }
                page.footerSections.forEach(section=>{
                    page.sections.push(section);
                    preLoadJson.names.push(section[section.length -1]);
                });
                let filePath = path.join(
                    directoryPath,
                    "tags.json"
                );
                await writeFileSync(filePath, cleanObject(page.tags));
                const fileName = baseUrl.split('/');

                filePath = path.join(
                    directoryPath,
                    fileName[fileName.length - 1] + ".json"
                );
                await writeFileSync(filePath, page.sections);
                await writeFileSync(path.join(
                    directoryPath,
                    "pre-load.json"
                ), preLoadJson);
            }
            return page;
        }
        return null;
    }
}