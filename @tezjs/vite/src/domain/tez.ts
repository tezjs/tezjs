import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { HtmlPage } from "./html-page";
import { PageCollection } from "@tezjs/payload";
import { overrideEnvVariables } from "../functions/override-env-variables";
import { BLANK, ENVIRONMENTS } from "../const/core.const";
import { generateSW } from "./service-worker/generate-sw";
export function tez(): Plugin {
	return {
		name: "vite:tez",
		transformIndexHtml: {
			enforce: "post",
			transform(html: string, ctx?: IndexHtmlTransformContext): IndexHtmlTransformResult {
				if (!ctx || !ctx.bundle) return html
				let routes = commonContainer.getAppRoutes();
				var files = Object.entries(ctx.bundle).map(t=> {
					const [, value] = t;
				return (<any>value).fileName;
				})
				for(var route of routes){
					let htmlPage = new HtmlPage(html,route)
					htmlPage.createPage(files)
				}
				return html;
			},
		},
		closeBundle(){
			if(commonContainer.tezConfig.pwa)
				generateSW();
		},
        async buildStart() {
			await overrideEnvVariables(BLANK,ENVIRONMENTS);  
			commonContainer.setupConfig();
			 const pageCollection = new PageCollection(commonContainer.tezConfig.strapi);
      		 await pageCollection.generate();
          }
	}
}