import { ImageTransform } from "./image/image";
import { Page } from "./page/page";
import { StrapiModuleConfig } from "./strapi/strapi-module-config";

import {  HtmlPage } from './html/html'
import { ClientConfig } from "./client-config";
import { PayloadConfig } from "./strapi/payload-config";
import { DeploymentConfig } from "./deployment-config";
import { BuildConfig } from "./build-config";
import { TezModuleConfig } from "./tez-module-config";
import { GenerateConfig } from "./generate-config";
import { PwaConfig } from "./pwa/pwa-config";
import { AmpConfig } from "./amp-config";
import { TezSeo } from "./seo/seo";
import { Sitemap } from "./seo/sitemap";
export interface TezConfig {
    generate?:GenerateConfig;
    sourceCodePath?:string
    spa?:boolean;
    viteOptions?:any;
    payloadPath?:string;
    strapi?:boolean | StrapiModuleConfig;
    express?:any;
    pwa?:PwaConfig | boolean;
    pwaConfigPath?:string
    image?:ImageTransform;
    extendPages?:{[key:string]:{seo?:TezSeo, sitemap?:Sitemap;}},
    pages?:Page[];
    robots?:{[key:string]:string}
    envName?:string;
    htmlMeta?:HtmlPage;
    client?:ClientConfig;
    payload?:PayloadConfig;
    deployment?:DeploymentConfig;
    build?:BuildConfig;
    modules?:TezModuleConfig[];
    amp?: AmpConfig;   
}