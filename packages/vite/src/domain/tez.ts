import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { HtmlPage } from "./html-page";
import { PageCollection } from "@tezjs/payload";
import { generateSW } from "./service-worker/generate-sw";
import { TezConfig } from "@tezjs/types";
export function tez(tezConfig:TezConfig,rootPath:string): Plugin {
	return {
		name: "vite:tez",
		transformIndexHtml: {
			enforce: "post",
			transform(html: string, ctx?: IndexHtmlTransformContext): IndexHtmlTransformResult {
				if (!ctx || !ctx.bundle) return html
				let minifiedHtml = '';
				let routes = commonContainer.getAppRoutes();
				var files = Object.entries(ctx.bundle).map(t=> {
					const [, value] = t;
				return (<any>value).fileName;
				})
				for(var route of routes){
					let htmlPage = new HtmlPage(html,route)
					htmlPage.createPage(files)
					console.log(route.path)
					if(route.path == "/index")
						minifiedHtml = htmlPage.html
				}
				return minifiedHtml || html;
			},
		},
		closeBundle(){
				generateSW();
		},
        async buildStart() {
			commonContainer.setupConfig(tezConfig,rootPath);
			 const pageCollection = new PageCollection();
      		 await pageCollection.generate();
          }
	}
}