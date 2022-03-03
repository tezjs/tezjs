import { StrapiModuleConfig } from "./strapi/strapi-module-config";

export interface TezConfig {
    payloadPath?:string;
    strapi?:StrapiModuleConfig;
}