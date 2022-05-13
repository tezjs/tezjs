import { existsSync } from "fs";
import { CommonPathResolver } from "../domain/common-path.resolver";
import { readFileSync } from "../functions/read-file-sync";
import { resolvePath } from "../functions/resolve-path";
import { StrapiModuleConfig, TezConfig } from "@tezjs/types"
import { DEFAULT_STRAPI_URL } from "./app.const";
import { deepMerge } from "../functions/deep-merge";

export const commonContainer:
    {
        setupConfig(tezConfig?:TezConfig,rootDir?:string):void,
        tezConfig:TezConfig
        getAppRoutes():any[]
        expressConfig:{[key:string]:any}
        getStrapiConfig():StrapiModuleConfig
    } = new (class {
        tezConfig:TezConfig = {};
        expressConfig = {};
        ignoreColumns: Array<string> = ["createdAt","publishedAt","id","published_at", "created_at", "ParentPage", "__component", "provider"]
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
            payload:{
                page:{maxPreLoadComponent:3 }
            }
            
        }
        setupConfig(tezConfig?:TezConfig,rootDir?:string){
            if(tezConfig){
                this.tezConfig = tezConfig
                this.tezConfig.rootDir= rootDir?rootDir:process.cwd();
                this.setDefaultStrapi();
                this.setExpress();
            }
            
        }

        setDefaultStrapi(){
            if(typeof this.tezConfig.strapi === "boolean")
                this.tezConfig.strapi = this.strapiModuleConfig
            if(this.tezConfig.strapi){
                let strapi = <StrapiModuleConfig>this.tezConfig.strapi;
                strapi = deepMerge(this.strapiModuleConfig,this.tezConfig.strapi);
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

        setExpress(){
            if(this.tezConfig && this.tezConfig.express && this.tezConfig.express.path){
                let configPath = resolvePath(this.tezConfig.express.path);
                if(existsSync(configPath))
                this.expressConfig = require(configPath)
            }
        }
    })();