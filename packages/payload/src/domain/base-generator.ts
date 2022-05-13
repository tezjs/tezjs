import { PayloadConfig,Page } from "@tezjs/types";
import { commonContainer } from '@tezjs/common'
import { PageSlot } from "./page-slot";
import * as path from "path";
import { PathResolver } from "./path-resolver";
import { writeFileSync } from "@tezjs/common";
import { replaceSpace } from "../utils/replace-space";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import getUrl from "../utils/get-url";
import { Sitemap } from "./sitemap";
import { RedirectRoute } from "./redirect-routes";

export abstract class BaseGenerator{
    pathResolver:PathResolver;
    payload:PayloadConfig;
    constructor(private redirectRoute:RedirectRoute,private sitemap:Sitemap){
        const { payload } = commonContainer.getStrapiConfig();
        this.pathResolver = new PathResolver();
        this.payload = payload;
    }

    async generatePage(page:Page){
        const url = getUrl(page.url);
        const directoryPath = path.join(this.pathResolver.payloadPath, url);
        let pageSlot = new PageSlot();
        for (let j = 0; j < page.components.length; j++) {
            let component = page.components[j];
            let componentId = `${j}-${component.name}`
            let slot = pageSlot.getSlot(component.slotName);
            const filePath = path.join(
                directoryPath,
                componentId + ".json"
            );
            slot.push((this.payload.page.maxPreLoadComponent) > j  ? [component.data,componentId] : [componentId])
            if((this.payload.page.maxPreLoadComponent) < j)
            await writeFileSync(filePath, component.data);
        }
        let filePath = path.join(
            directoryPath,
            "tags.json"
        );
        await writeFileSync(filePath, cleanObject(page.seo));
        const fileName = url.split('/');
        filePath = path.join(
            directoryPath,
            fileName[fileName.length - 1] + ".json"
        );
        let pageJson = {slots:pageSlot.slots};
        if(page.masterPageName)
            pageJson["masterPage"] = replaceSpace(page.masterPageName)
        await writeFileSync(filePath, pageJson);

        this.sitemap.add({sitemap:{...page.sitemap,...{loc:page.url}}});
        this.redirectRoute.add(page);
        
    }
}