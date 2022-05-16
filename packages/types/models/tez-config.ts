import { Express } from "./express/express";
import { ImageTransform } from "./image/image";
import { Page } from "./page/page";
import { StrapiModuleConfig } from "./strapi/strapi-module-config";

import {  HtmlPage } from './html/html'
export interface TezConfig {
    viteOptions?:any;
    port?:number;
    rootDir?:string;
    payloadPath?:string;
    strapi?:boolean | StrapiModuleConfig;
    express?:Express;
    pwa?:{[key:string]:any};
    image?:ImageTransform;
    pages?:Page[];
    robots?:{[key:string]:string}
    envName?:string;
    htmlPageConfig?:HtmlPage;
    mode?:string;
}