import { PayloadGenratorConfig } from "./strapi/payload-generator-config";
import {HtmlPage } from './html/html'
export interface TezModuleConfig {
    payload:(config:PayloadGenratorConfig)=>Promise<{[key:string]:{components:Array<{slotName:string,data:any}>,layoutName:string,head:HtmlPage}} | null>;
}