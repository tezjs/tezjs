import { Express } from "./express/express";
import { ImageTransform } from "./image/image";
import { Page } from "./page/page";
import { StrapiModuleConfig } from "./strapi/strapi-module-config";

import {  HtmlPage } from './html/html'
import { ClientEntry } from "./client-entry";
import { PayloadConfig } from "./strapi/payload-config";
import { DeploymentConfig } from "./deployment-config";
import { BuildConfig } from "./build-config";
import { TezModuleConfig } from "./tez-module-config";
import { GenerateConfig } from "./generate-config";
import { PwaConfig } from "./pwa/pwa-config";
export interface TezConfig {
    generate?:GenerateConfig;
    sourceCodePath?:string
    spa?:boolean;
    viteOptions?:any;
    payloadPath?:string;
    strapi?:boolean | StrapiModuleConfig;
    express?:Express;
    pwa?:PwaConfig | boolean;
    image?:ImageTransform;
    pages?:Page[];
    robots?:{[key:string]:string}
    envName?:string;
    htmlMeta?:HtmlPage;
    client?:ClientEntry;
    payload?:PayloadConfig;
    deployment?:DeploymentConfig;
    build?:BuildConfig;
    modules?:TezModuleConfig[];
}