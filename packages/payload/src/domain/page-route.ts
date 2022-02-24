import {  CONTENT_PROP_NAMES, DYNAMIC_PROP_NAMES, META_TAG_PROP_NAMES, SEO_PROP_NAMES, TITLE_PROPS, UNDERSCORE, URL_PROPS } from "../const/app.const";
import { REMOVE_SPECIAL_CHARACTERS } from "../const/app.regex";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "../interface/page-collection-config";
import { PageRouteResponse } from "../interface/page-route-response";
import SnakeCaseSanitizer from "../sanitizers/snake-case.sanitizer";
import { getQueryParams } from "../utils/get-query-params";
import getUrl from "../utils/get-url";
import { mergeUrl } from "../utils/merge-url";
import { readProp } from "../utils/read-prop";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";

export class PageRoute {
    private pageCollectionConfig: PageCollectionConfig;
    private pathResolver: PathResolver;
    constructor(private requestService: RequestService) {
        const { pageCollectionConfig } = defaultContainer.moduleOptions;
        this.pageCollectionConfig = pageCollectionConfig;
        this.pathResolver = new PathResolver();
    }

    async getRoutes(locale:string): Promise<PageRouteResponse> {
        let uri = `/${this.pageCollectionConfig.name}?${getQueryParams(['limit','populate'])}`
        if (locale)
            uri = `/${uri}&${getQueryParams(['locale','limit','populate'],locale)}`;
        
        const dataItems = await this.requestService.get(uri);
        const routes = [];
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
                            routes.push({
                                name: title.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                                path: path
                            })
                        }
                    }
                }
            } else {
                routes.push({
                    name: readProp(item,TITLE_PROPS).replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                    path: readProp(item, URL_PROPS)
                })
            }
        }
        
        await writeFileSync(this.pathResolver.routesJsonPath, routes)
        return { routes: routes, dynamicPageRoute: dynamicPageRoute };
    }
}