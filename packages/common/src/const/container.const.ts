import { CommonPathResolver } from "../domain/common-path.resolver";
import { readFileSync } from "../functions/read-file-sync";
import { StrapiModuleConfig, TezConfig } from "@tezjs/types"
import { DEFAULT_STRAPI_URL } from "./app.const";
import { deepMerge } from "../functions/deep-merge";
import {  BuildOptions } from "@tezjs/types"

export const commonContainer:
    {
        setupConfig(tezConfig?:TezConfig):void,
        tezConfig:TezConfig
        getAppRoutes():any[]
        expressConfig:{[key:string]:any}
        getStrapiConfig():StrapiModuleConfig;
        buildOptions:BuildOptions;
    } = new (class {
        buildOptions:BuildOptions;
        tezConfig:TezConfig = {};
        expressConfig = {};
        ignoreColumns: Array<string> = ["createdAt","publishedAt","id","published_at", "created_at", "ParentPage", "__component", "provider"]
        defaultTezConfig:TezConfig = {
            sourceCodePath:'',
            payload:{
                page:{maxPreLoadComponent:3 }
            },build:{
                inLineCss:true,
                inLineJs:true,
                minifyHtml:true
            },
            generate:{
                sitemap:true,
                robots:true
            }
        }
        strapiModuleConfig:StrapiModuleConfig = {
            version:4,
            payloadRootPath: "public",
            isDev: true,
            siteUrl:"http://localhost:3000",
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
            robots:{
                environmentName:"Dev"
            }, 
            componentDataFieldSelectors: {},
            limit: 10000,
            serializeJson: { isCamelCase: true },
            optimization: {
                sourcePagination:true
            },
            pagination: {
                pageSize: 10
            },
            
            
        }
        setupConfig(tezConfig?:TezConfig){
            if(tezConfig){
                this.tezConfig = tezConfig
                this.setDefaultStrapi();
                this.tezConfig = deepMerge(this.defaultTezConfig, this.tezConfig)
            }
            
        }

        setDefaultStrapi(){
            if(typeof this.tezConfig.strapi === "boolean")
                this.tezConfig.strapi = this.strapiModuleConfig
            if(this.tezConfig.strapi){
                let strapi = <StrapiModuleConfig>this.tezConfig.strapi;
                strapi = deepMerge(this.strapiModuleConfig,this.tezConfig.strapi);
                this.tezConfig.strapi = strapi;
                strapi.ignoreColumns = strapi.ignoreColumns ? strapi.ignoreColumns.concat(...this.ignoreColumns) : this.ignoreColumns;
            }
                
        }

        getStrapiConfig():StrapiModuleConfig{
            return this.tezConfig.strapi ? <StrapiModuleConfig>this.tezConfig.strapi : {};
        }
        getAppRoutes():any[]{
            var commonPath = new CommonPathResolver();
            let routes:any = readFileSync(commonPath.routesJsonPath)
            return routes || [];
        }
    })();