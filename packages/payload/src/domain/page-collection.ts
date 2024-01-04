import { RequestService } from "./request.server";
import { InternationalizationService } from "./internationalization-.service";
import { PageRoute } from "./page-route";
import { PayloadGenerator } from "./payload-generator";
import { PathResolver } from "./path-resolver";
import { Sitemap } from "./sitemap";
import { RobotTxtGenerator } from "./robot-txt-generator";
import { RedirectRoute } from "./redirect-routes";

import { commonContainer,CommonPathResolver } from '@tezjs/common'
import { CustomPagePayload } from "./custom-page-payload";
import getUrl from "../utils/get-url";
import { DeploymentDomain } from "./deployment/deployment-domain";
import { defaultContainer } from "../const/core.const";
import { GlobWriter } from "./glob-writer";
import { StrapiModuleConfig } from "@tezjs/types";
import { PayloadModuleRunner } from "./payload-module-runner";
export class PageCollection {
    private moduleRunner:PayloadModuleRunner;
    private requestService: RequestService;
    private internationalizationService: InternationalizationService;
    private pageRoute: PageRoute;
    private payloadGenerator: PayloadGenerator;
    private pathResolver: PathResolver;
    private commonPathResolver:CommonPathResolver;
    private sitemap:Sitemap;
    private robotsGenerator:RobotTxtGenerator;
    private redirectRoute:RedirectRoute;
    private customPagePayload:CustomPagePayload;
    private deployment:DeploymentDomain
    private globWriter:GlobWriter
    constructor() {
        this.requestService = new RequestService();
        this.internationalizationService = new InternationalizationService(this.requestService);
        this.pageRoute = new PageRoute(this.requestService)
        this.sitemap = new Sitemap();
        this.robotsGenerator = new RobotTxtGenerator();
        this.redirectRoute = new RedirectRoute();
        this.globWriter = new GlobWriter();
        this.payloadGenerator = new PayloadGenerator(this.requestService,this.redirectRoute,this.sitemap,this.globWriter);
        this.pathResolver = new PathResolver();
        
        this.commonPathResolver = new CommonPathResolver();
        this.customPagePayload = new CustomPagePayload(this.redirectRoute,this.sitemap,this.pageRoute);
        this.moduleRunner = new PayloadModuleRunner(this.redirectRoute,this.sitemap,this.pageRoute,this.globWriter)
    }
    async generate(routePath?:string){
        await this.globWriter.setLayoutComponents();
        let config = {
            routePath:routePath,
            redirectRoute:this.redirectRoute,
            sitemap:this.sitemap,
            globWriter:this.globWriter,
            pathResolver:this.pathResolver,
            pageRoute:this.pageRoute

        };
        if(commonContainer.tezConfig.strapi){
            if((<StrapiModuleConfig>commonContainer.tezConfig.strapi).customPayloadGenerator)
                await (<StrapiModuleConfig>commonContainer.tezConfig.strapi).customPayloadGenerator(config)
            else
                await this.generateStrapiPayload(routePath)
        }
            
        if(commonContainer.tezConfig.pages)
            await this.customPagePayload.generate(routePath)
        await this.moduleRunner.runPayload(config,commonContainer.tezConfig.extendPages);
        this.pageRoute.save();
        if(commonContainer.tezConfig.generate.sitemap)
            this.sitemap.save()
        if(commonContainer.tezConfig.generate.robots)
          await this.robotsGenerator.generate();
        this.redirectRoute.save();
        this.globWriter.write();
        if(commonContainer.buildOptions.commandName === "build"){
            this.deployment = new DeploymentDomain();
            this.deployment.generate();
        }
            
    }
    async generateStrapiPayload(routePath?:string) {
        await this.requestService.login()
        const locales = await this.internationalizationService.getLocales();
        for (let j = 0; j < locales.length; j++) {
            const pageRouteResponse = await this.pageRoute.getRoutes(locales.length === 1 ? "" : locales[j]);
            for (let i = 0; i < pageRouteResponse.routes.length; i++) {
                const route = pageRouteResponse.routes[i];
                if((routePath === route.path) || !routePath){
                    let deleteRouteFolder = routePath === route.path;
                    if(deleteRouteFolder){
                        this.deletePayloadItem(`${this.pathResolver.payloadPath}${ getUrl( routePath)}`)
                        defaultContainer.clearState();
                    }
                   await this.payloadGenerator.generate(route, pageRouteResponse.dynamicPageRoute)
                    if(deleteRouteFolder)
                    break;
                }
                
            }
        }

    }

    deletePayloadItem(routePath:string){
        this.commonPathResolver.removeDirSync(routePath);
    }

}