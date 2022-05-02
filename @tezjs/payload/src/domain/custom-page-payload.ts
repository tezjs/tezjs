import { commonContainer, createPath } from "@tezjs/common";
import { Component } from '@tezjs/types'
import getUrl from "../utils/get-url";
import { PathResolver } from "./path-resolver";
import * as path from "path";
import { RequestService } from "./request.server";
import { BaseGenerator } from "./base-generator";
import { RedirectRoute } from "./redirect-routes";
import {Sitemap} from './sitemap'

export class CustomPagePayload extends BaseGenerator{
    private requestService:RequestService;
    constructor(redirectRoute:RedirectRoute,sitemap:Sitemap){
        super(redirectRoute,sitemap)
        this.requestService = new RequestService();
    }
    async generate(routePath){
        const pages = commonContainer.tezConfig.pages;
        for(let page of pages){
            let url = getUrl(page.url);
            const directoryPath = path.join(this.pathResolver.payloadPath, url);
            const isNotExits = createPath(directoryPath);
            if(isNotExits) {
                for(const component of page.components){
                    let payload = await this.getPayload(component,url);
                    component.data = payload;
                }
            }
           await this.generatePage(page)
        }
    }

    async getPayload(component:Component,url:string){
        return new Promise<any>(async (resolve,reject)=>{
            let payloadData:any = component.data;
            switch(typeof component.data){
                case "string":
                    payloadData = await this.requestService.payloadRequest(component.data);
                    break;
                case "function":
                    let result = component.data(url);
                    if(result instanceof Promise){
                        payloadData  = await result;
                    }else
                        payloadData = result;
                    break;
            }
            if(payloadData === undefined)
            payloadData = {};
            resolve(payloadData);
        })
        
    }
}
