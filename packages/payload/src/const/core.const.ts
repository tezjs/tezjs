import { existsSync } from "fs";
import { StrapiModuleConfig } from "../interface/strapi-module-config";
import { deepMerge } from "./merge-object";
const DEFAULT_STRAPI_URL = 'http://localhost:1337'
export const defaultContainer:
    {
        setOption(moduleOptions: StrapiModuleConfig): void;
        moduleOptions: StrapiModuleConfig;
        nuxtInstance: any;
        filterCollectionState: { [key: string]: any };
        collectionState: { [key: string]: any };
        getUniqueId(): string;
        cacheDynamicPageCollection(collectionName: string, data: any[]): void;
        getDynamicPageCollection(collectionName: string, filterExpression: any): { [key: string]: any };
    } = new (class {
        dynamicPageCollection: { [key: string]: any[] } = {};
        collectionState: { [key: string]: any } = {};
        filterCollectionState: { [key: string]: any } = {};
        nuxtInstance: any = undefined;
        ignoreColumns: Array<string> = ["createdAt","publishedAt","id","published_at", "created_at", "ParentPage", "__component", "provider"]
        moduleOptions: StrapiModuleConfig = {
            version:4,
            payloadRootPath: "static",
            isDev: true,
            
            apiUri: DEFAULT_STRAPI_URL,
            pageCollectionConfig: {
                name: "pages",
                fieldName: {
                    title: "title",
                    uri: "Slug"
                }
            },
            media: {
                uris: [DEFAULT_STRAPI_URL],
                cdnUri: DEFAULT_STRAPI_URL
            },
            componentDataFieldSelectors: {},
            limit: 10000,
            siteUrl: "http://127.0.0.1",
            serializeJson: { isCamelCase: true },
            optimization: {
                sourcePagination:false
            },
            pagination: {
                pageSize: 2
            },
            payload:{
                page:{maxPreLoadComponent:3 }
            }
            
        };
        setOption(moduleOptions: StrapiModuleConfig) {
            
            this.moduleOptions = deepMerge(this.moduleOptions, moduleOptions);
            this.moduleOptions.ignoreColumns = this.moduleOptions.ignoreColumns ? this.moduleOptions.ignoreColumns.concat(...this.ignoreColumns) : this.ignoreColumns;
            this.setPayloadPath()
        }

        setPayloadPath(){
            let publicFolder = `${process.cwd()}\\public`;
            let staticFolder = `${process.cwd()}\\static`;
          if(existsSync(publicFolder))
            this.moduleOptions.payloadRootPath = "public";
          else if(existsSync(staticFolder))
            this.moduleOptions.payloadRootPath = "static";
        }

        getUniqueId(): string {
            return String(parseInt(String(Math.random() * 10000000)));
        }

        cacheDynamicPageCollection(collectionName: string, data: any[]) {
            this.dynamicPageCollection[collectionName] = data;
        }

        getDynamicPageCollection(collectionName: string, filterExpression: any) {
            return this.dynamicPageCollection[collectionName] ? this.dynamicPageCollection[collectionName].filter(filterExpression) : [];
        }
    })();