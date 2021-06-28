import { getPath } from "../utils/get-path";
import { writeFileSync } from "../utils/write-file";
import { RequestService } from "./request.server";
import { InternationalizationService } from "./internationalization-.service";
import { PageRoute } from "./page-route";
import { PayloadGenerator } from "./payload-generator";
import { PathResolver } from "./path-resolver";
export class PageCollection {
    private requestService: RequestService;
    private internationalizationService: InternationalizationService;
    private pageRoute: PageRoute;
    private payloadGenerator: PayloadGenerator;
    private pathResolver: PathResolver;
    constructor(builder: any) {
        this.requestService = new RequestService();
        this.internationalizationService = new InternationalizationService(this.requestService);
        this.pageRoute = new PageRoute(this.requestService, builder)
        this.payloadGenerator = new PayloadGenerator(this.requestService, builder);
        this.pathResolver = new PathResolver(builder);
    }
    async generate() {
        await this.requestService.login()
        const locales = await this.internationalizationService.getLocales();
        const siteMaps = {};
        for (let j = 0; j < locales.length; j++) {
            const pageRouteResponse = await this.pageRoute.getRoutes(locales.length === 1 ? "" : locales[j]);
            for (let i = 0; i < pageRouteResponse.routes.length; i++) {
                const route = pageRouteResponse.routes[i];
                const page = await this.payloadGenerator.generate(route, pageRouteResponse.dynamicPageRoute)
                if (page && page.siteMap && Object.keys(page.siteMap).length > 0) 
                    siteMaps[page.siteMap.loc] = page.siteMap;
            }
        }
        await writeFileSync(this.pathResolver.sitemapJsonPath, siteMaps)
    }
}