import { getPath } from "../utils/get-path";
import { writeFileSync } from "../utils/write-file";
import { RequestService } from "./request.server";
import { InternationalizationService } from "./internationalization-.service";
import { PageRoute } from "./page-route";
import { PayloadGenerator } from "./payload-generator";
import { PathResolver } from "./path-resolver";
import { Sitemap } from "./sitemap";
import { RobotTxtGenerator } from "./robot-txt-generator";
import { RedirectRoute } from "./redirect-routes";
import { StrapiModuleConfig } from "..";
import { defaultContainer } from "../const/core.const";
export class PageCollection {
    private requestService: RequestService;
    private internationalizationService: InternationalizationService;
    private pageRoute: PageRoute;
    private payloadGenerator: PayloadGenerator;
    private pathResolver: PathResolver;
    private sitemap:Sitemap;
    private robotsGenerator:RobotTxtGenerator;
    private redirectRoute:RedirectRoute;
    constructor(builder: any,tezConfig:StrapiModuleConfig) {
        defaultContainer.setOption(tezConfig)
        this.requestService = new RequestService();
        this.internationalizationService = new InternationalizationService(this.requestService);
        this.pageRoute = new PageRoute(this.requestService, builder)
        this.payloadGenerator = new PayloadGenerator(this.requestService, builder);
        this.pathResolver = new PathResolver();
        this.sitemap = new Sitemap();
        this.robotsGenerator = new RobotTxtGenerator();
        this.redirectRoute = new RedirectRoute();
    }
    async generate() {
        await this.requestService.login()
        const locales = await this.internationalizationService.getLocales();
        for (let j = 0; j < locales.length; j++) {
            const pageRouteResponse = await this.pageRoute.getRoutes(locales.length === 1 ? "" : locales[j]);
            for (let i = 0; i < pageRouteResponse.routes.length; i++) {
                const route = pageRouteResponse.routes[i];
                const page = await this.payloadGenerator.generate(route, pageRouteResponse.dynamicPageRoute)
                this.sitemap.add(page);
                this.redirectRoute.add(page);
            }
        }
        this.sitemap.save()
        await this.robotsGenerator.generate();
        this.redirectRoute.save();
    }
}