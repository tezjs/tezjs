import { existsSync } from "fs";
import { StrapiModuleConfig } from "@tezjs/types";
import { deepMerge } from "./merge-object";
import { DEFAULT_STRAPI_URL } from "./app.const";

export const defaultContainer:
    {
        setOption(moduleOptions: StrapiModuleConfig): void;
        moduleOptions: StrapiModuleConfig;
        nuxtInstance: any;
        filterCollectionState: { [key: string]: any };
        collectionState: { [key: string]: any };
        writeImageUris:Array<string>;
        getUniqueId(): string;
        cacheDynamicPageCollection(collectionName: string, data: any[]): void;
        getDynamicPageCollection(collectionName: string, filterExpression: any): { [key: string]: any };
        clearState():void;
    } = new (class {
        writeImageUris:Array<string>= new Array<string>();
        dynamicPageCollection: { [key: string]: any[] } = {};
        collectionState: { [key: string]: any } = {};
        filterCollectionState: { [key: string]: any } = {};
        nuxtInstance: any = undefined;

        getUniqueId(): string {
            return String(parseInt(String(Math.random() * 10000000)));
        }

        cacheDynamicPageCollection(collectionName: string, data: any[]) {
            this.dynamicPageCollection[collectionName] = data;
        }

        getDynamicPageCollection(collectionName: string, filterExpression: any) {
            return this.dynamicPageCollection[collectionName] ? this.dynamicPageCollection[collectionName].filter(filterExpression) : [];
        }

        clearState(){
            this.filterCollectionState = {};
            this.collectionState = {};
            this.dynamicPageCollection = {};
        }
    })();