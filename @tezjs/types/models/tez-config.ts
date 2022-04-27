import { Express } from "./express/express";
import { StrapiModuleConfig } from "./strapi/strapi-module-config";

export interface TezConfig {
    payloadPath?:string;
    strapi?:StrapiModuleConfig;
    express?:Express;
    pwa?:{[key:string]:any}
}