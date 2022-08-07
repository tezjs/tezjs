import { PayloadConfig,Page } from "@tezjs/types";
import { commonContainer, createPath } from '@tezjs/common'
import { PageSlot } from "./page-slot";
import * as path from "path";
import { PathResolver } from "./path-resolver";
import { writeFileSync } from "@tezjs/common";
import { replaceSpace } from "../utils/replace-space";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import getUrl from "../utils/get-url";
import { Sitemap } from "./sitemap";
import { RedirectRoute } from "./redirect-routes";
import { GlobWriter } from "./glob-writer";
import { PageRoute } from "./page-route";
import { isPageComponent } from "../utils/is-page-component";

export abstract class BaseGenerator{
    pathResolver:PathResolver;
    payload:PayloadConfig;
    constructor(private redirectRoute:RedirectRoute,private sitemap:Sitemap,private globWriter:GlobWriter,private pageRoute?:PageRoute){
        const { payload } = commonContainer.tezConfig;
        this.pathResolver = new PathResolver();
        this.payload = payload;
    }

    async generatePage(page:Page){
        const url = getUrl(page.url);
        const directoryPath = path.join(this.pathResolver.payloadPath, url);
        let pageSlot = new PageSlot();
        let index = 0;
        for (let j = 0; j < page.components.length; j++) {
            let component = page.components[j];
            let componentId = `${j}-${component.name}`
            let slot = pageSlot.getSlot(component.slotName);
            let isExits =isPageComponent(component.name);
            if(!isExits)
                isExits = this.globWriter.addComponent(component.name)
            else
                this.globWriter.addPage(component.name)
            if(isExits){
                const filePath = path.join(
                    directoryPath,
                    componentId + ".json"
                );
                slot.push((this.payload.page.maxPreLoadComponent) > index  ? [component.data || {},componentId] : [componentId])
                if((this.payload.page.maxPreLoadComponent) <= j)
                    await writeFileSync(filePath, component.data);
                index++;
            }
            
            
        }
        let filePath = path.join(
            directoryPath,
            "tags.json"
        );
        await writeFileSync(filePath, cleanObject(page.seo || {}));
        const fileName = url.split('/');
        filePath = path.join(
            directoryPath,
            fileName[fileName.length - 1] + ".json"
        );
        let pageJson = {slots:pageSlot.slots};
        if(page.masterPageName)
            pageJson["masterPage"] = replaceSpace(page.masterPageName)
        await writeFileSync(filePath, pageJson);
        if(page.sitemap)
            this.sitemap.add({sitemap:{...page.sitemap,...{loc:`${commonContainer.getStrapiConfig().siteUrl}${page.url}`}}});
        this.redirectRoute.add(page);
        
    }

    async generateRoute(page:any){
        let url = getUrl(page.url);
        console.log(url)
        this.pageRoute.addRoute({path:page.url});
        const directoryPath = path.join(this.pathResolver.payloadPath, url);
        createPath(directoryPath);
        await this.generatePage(page)
    }
}