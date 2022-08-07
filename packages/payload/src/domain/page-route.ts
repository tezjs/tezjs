import {  CONTENT_PROP_NAMES, DYNAMIC_PROP_NAMES, META_TAG_PROP_NAMES, SEO_PROP_NAMES, TITLE_PROPS, UNDERSCORE, URL_PROPS } from "../const/app.const";
import * as path from 'path'
import { REMOVE_SPECIAL_CHARACTERS } from "../const/app.regex";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "@tezjs/types";
import { PageRouteResponse } from "@tezjs/types";
import SnakeCaseSanitizer from "../sanitizers/snake-case.sanitizer";
import { getQueryParams } from "../utils/get-query-params";
import getUrl from "../utils/get-url";
import { mergeUrl } from "../utils/merge-url";
import { readProp } from "../utils/read-prop";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";
import { commonContainer } from "@tezjs/common";
import { dynamicRouteCodeTemplate } from "../utils/dynamic-route-code-template";

export class PageRoute {
    private pageCollectionConfig: PageCollectionConfig;
    private pathResolver: PathResolver;
    private routes:Array<{name:string,path:string,fPath:string}> = new Array<{name:string,path:string,fPath:string}>();
    private dynamicRoutes:{[key:string]:string}
    constructor(private requestService: RequestService) {
        const { pageCollectionConfig } = commonContainer.getStrapiConfig();
        this.pageCollectionConfig = pageCollectionConfig;
        this.pathResolver = new PathResolver();
        this.routes = commonContainer.getAppRoutes();
        this.dynamicRoutes = {};
    }

    async getRoutes(locale:string): Promise<PageRouteResponse> {
        let uri = `/${this.pageCollectionConfig.name}?${getQueryParams(['limit','populate'])}`
        if (locale)
            uri = `/${uri}&${getQueryParams(['locale','limit','populate'],locale)}`;
        
        const dataItems = await this.requestService.get(uri);
        let routes = [];
        this.routes  = routes = [];
        const dynamicPageRoute = {};
        for (let i = 0; i < dataItems.length; i++) {
            const item = dataItems[i];
            const dynamicPage = readProp(item,DYNAMIC_PROP_NAMES);
            if (dynamicPage) {
                const dynamicItems = await this.requestService.get(`/${SnakeCaseSanitizer(dynamicPage)}?${getQueryParams(['limit','populate'])}`);
                const seoItems = await this.requestService.get(`/${SnakeCaseSanitizer(dynamicPage)}?${getQueryParams(['limit','seoPopulate'])}`);
                
                defaultContainer.cacheDynamicPageCollection(dynamicPage, dynamicItems);
                for (let j = 0; j < dynamicItems.length; j++) {
                    const dynamicItem = dynamicItems[j];
                    const seoItem = seoItems[j]
                    let compareUrl = readProp(seoItem, URL_PROPS);
                    let url = readProp(dynamicItem, URL_PROPS);
                    if(compareUrl === url){
                        dynamicItem.seo = seoItem.seo;
                        dynamicItem.masterPage = seoItem.masterPage;
                    }
                        
                    if(url){
                        url = mergeUrl(readProp(item, URL_PROPS), url);
                        const title = readProp(dynamicItem, TITLE_PROPS);
                        dynamicPageRoute[url] = {
                            url: readProp(item, URL_PROPS), data: { id: dynamicItem.id, title: title || '', content:readProp(dynamicItem, CONTENT_PROP_NAMES) || undefined, metaTags: readProp(dynamicItem, META_TAG_PROP_NAMES) || undefined, seo: readProp(dynamicItem, SEO_PROP_NAMES) || undefined },
                            referenceData:dynamicItem,
                            collectionName:dynamicPage
                        };
                        const path = getUrl(url);
                        if (routes.filter(t => t.path === path).length === 0) {
                            this.addRoute({
                                name: title,
                                path: path
                            })
                        }
                    }
                }
            } else {
                this.addRoute({
                    name: readProp(item,TITLE_PROPS),
                    path: readProp(item, URL_PROPS)
                })
            }
        }
        
        return { routes: routes, dynamicPageRoute: dynamicPageRoute };
    }

    addRoute(routeItem:{name?:string,path:string}){
        if(this.routes.filter(t=>t.path === routeItem.path).length === 0)
        this.routes.push({
            name: (routeItem.name || routeItem.path).replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
            path: routeItem.path,
            fPath:getUrl(routeItem.path).split('/').join(path.sep)
        })
    }
    
    addRoutes(routes){
        this.routes = routes;
    }

    addDynamicRoute(dynamicPath:string,staticPath:string){
        if(dynamicPath.indexOf(":") !== -1)
            this.dynamicRoutes[dynamicPath] = staticPath;
    }


    async save(){
        await writeFileSync(this.pathResolver.commonPath.dynamicRoutesPath,dynamicRouteCodeTemplate(this.dynamicRoutes),true)
        await writeFileSync(this.pathResolver.routesJsonPath, this.routes)
    }
}