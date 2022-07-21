import { getFilterQueryParams } from "../utils/get-filter-query-params";
import parseStrapiData from "./parse-strapi-data";
import { RequestService } from "./request.server";
import { PathResolver } from "./path-resolver";
import { createPath, writeFileSync } from "@tezjs/common";
import * as path from "path";
import { PageSlot } from "./page-slot";
import { replaceSpace } from "../utils/replace-space";
import { GlobWriter } from "./glob-writer";

export class MasterPageCollection{
    private request:RequestService;
    private pathResolver: PathResolver;
    private pageSlot:PageSlot;
    private isGenerated:boolean = false;
    constructor(private globWriter:GlobWriter){
        this.request = new RequestService();
        this.pathResolver = new PathResolver();
        this.pageSlot = new PageSlot();
    }

    async setMasterPageInfo(uri:string,filterJson:{[key:string]:any},item:{[key:string]:any}) {
        let result = await this.request.get(`/${uri}?${getFilterQueryParams(filterJson,"deep")}`);
        item.masterPage = result[0].masterPage || {};
        item.seo = result[0].seo || {};
        if(!this.isGenerated && item.masterPage && item.masterPage.title){
            let masterPage = await parseStrapiData(item.masterPage, undefined, undefined,undefined);
            const directoryPath = path.join(this.pathResolver.payloadPath, "master-pages");
            createPath(directoryPath)
            let index = 0;
            for(let component of masterPage.components){
                if(component.data.slotName){
                    let componentId = `${index}-${component.name}`
                    let slot = this.pageSlot.getSlot(component.data.slotName);
                    delete component.data.slotName;
                    slot.push([component.data,componentId])
                    index++;
                    this.globWriter.addComponent(component.name)
                }
                
            }
            let filePath = path.join(
                directoryPath,
                `${replaceSpace(item.masterPage.title)}.json`
            );
            this.globWriter.addLayout(item.masterPage.layoutName)
            await writeFileSync(filePath, {layoutName:item.masterPage.layoutName,slots:this.pageSlot.slots});
            this.isGenerated  = true;
        }
        
    }
}