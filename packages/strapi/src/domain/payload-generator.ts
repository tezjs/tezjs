import axios from "axios";
import path from "path";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "../interface/page-collection-config";
import { PayloadConfig } from "../interface/payload-config";
import { Route } from "../interface/route";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import { createPath } from "../utils/create-path";
import { getPath } from "../utils/get-path";
import getUrl from "../utils/get-url";
import { getPagePrePostComponents } from "../utils/pre-post-layout";
import { writeFileSync } from "../utils/write-file";
import parseStrapiData from "./parse-strapi-data";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";

export class PayloadGenerator {
    private pageCollectionConfig: PageCollectionConfig;
    private pathResolver: PathResolver;
    private payload:PayloadConfig;
    constructor(private requestService: RequestService, builder: any) {
        const { pageCollectionConfig, payloadRootPath,payload } = defaultContainer.moduleOptions;
        this.pageCollectionConfig = pageCollectionConfig;
        this.pathResolver = new PathResolver();
        this.payload = payload;
    }

    async generate(route: Route, dynamicPageRoute: { [key: string]: any }): Promise<{ [key: string]: any } | null> {
        let url = getUrl(route.path);
        let baseUrl = url;
        let dynamicData = undefined;

        if (dynamicPageRoute[url]) {
            dynamicData = dynamicPageRoute[url].data;
            baseUrl = url;
            url = dynamicPageRoute[url].url;
        }
        const directoryPath = path.join(this.pathResolver.payloadPath, baseUrl);
        const isNotExits = createPath(directoryPath);
        if (isNotExits) {
            console.log(baseUrl)
            const result = await this.requestService.get(`/${this.pageCollectionConfig.name}?${this.pageCollectionConfig.fieldName.uri}=` + url);
            const page = await parseStrapiData(result[0], baseUrl, dynamicData);
            const preLoadJson:{names:string[],data:string[]} = {names:[],data:[]};
            if (page) {
                let componentIds = [];
                let preComponentCount = page.sections.length;
                console.log(page.sections.length)
                page.sections.forEach(section=>preLoadJson.names.push(section[section.length -1]))
                for (let j = 0; j < page.components.length; j++) {
                    const component = page.components[j];
                    componentIds.push(component.id);
                    const filePath = path.join(
                        directoryPath,
                        component.id + ".json"
                    );
                    component.data.clientComponentName = component.name;
                    await writeFileSync(filePath, component.data);
                    page.sections.push((this.payload.page.maxPreLoadComponent - preComponentCount) > j  ? [component.data,component.id] : [component.id])
                    preLoadJson.names.push(component.name)
                    if(this.payload.page.maxPreLoadComponent <= j)
                        preLoadJson.data.push(component.id)
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