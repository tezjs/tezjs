import {  UNDERSCORE } from "../const/app.const";
import { REMOVE_SPECIAL_CHARACTERS } from "../const/app.regex";
import { defaultContainer } from "../const/core.const";
import { PageCollectionConfig } from "../interface/page-collection-config";
import { PageRouteResponse } from "../interface/page-route-response";
import SnakeCaseSanitizer from "../sanitizers/snake-case.sanitizer";
import getUrl from "../utils/get-url";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";
import { RequestService } from "./request.server";

export class PageRoute {
    private pageCollectionConfig: PageCollectionConfig;
    private limit: number;
    private pathResolver: PathResolver;
    constructor(private requestService: RequestService, private builder: any) {
        const { pageCollectionConfig , limit} = defaultContainer.moduleOptions;
        this.pageCollectionConfig = pageCollectionConfig;
        this.limit = limit;
        this.pathResolver = new PathResolver(builder);
    }

    async getRoutes(locale:string): Promise<PageRouteResponse> {
        let uri = `/${this.pageCollectionConfig.name}?_limit=${this.limit}`
        if (locale)
            uri = `/${uri}&_locale=${locale}`;
        const dataItems = await this.requestService.get(uri);
        const routes = [];
        const dynamicPageRoute = {};
        for (let i = 0; i < dataItems.length; i++) {
            const item = dataItems[i];
            if (item.DynamicPage) {
                const dynamicItems = await this.requestService.get(`/${SnakeCaseSanitizer(item.DynamicPage)}`);
                for (let j = 0; j < dynamicItems.length; j++) {
                    const dynamicItem = dynamicItems[j];
                    dynamicPageRoute[dynamicItem.NavURL] = {
                        url: item.URL, data: { id: dynamicItem.id, title: dynamicItem.Title, content: dynamicItem.Content, metaTags: dynamicItem.MetaTags, seo: dynamicItem.SEO }
                    };
                    const path = getUrl(dynamicItem.NavURL);
                    if (routes.filter(t => t.path === path).length === 0) {
                        routes.push({
                            name: dynamicItem.Title.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                            path: path
                        })
                    }
                }

            } else {
                routes.push({
                    name: item.Title.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                    path: getUrl(item.URL)
                })
            }
        }
        await writeFileSync(this.pathResolver.routesJsonPath, routes)
        return { routes: routes, dynamicPageRoute: dynamicPageRoute };
    }
}