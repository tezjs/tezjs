import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { HtmlPage } from "./html-page";
import { PageCollection } from "@tezjs/payload";
import { generateSW } from "./service-worker/generate-sw";
import { readConfig } from "../functions/read-config";
import { DynamicCodeGen } from "./dynamic-code-gen";
// const virtualModuleId = /^[tez][a-zA-Z0-9]+/

export function tez(): Plugin {
	return {
		name: "vite:tez",
		// resolveId(id) {
		// 	if (virtualModuleId.test(id)) 
		// 	  return `${id}`
		//   },
		//   load(id) {
		// 	if (virtualModuleId.test(id)) {
		// 		return dynamicCodeGen.getCode(id);
		// 	}
		//   },
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
			await readConfig();
			const pageCollection = new PageCollection();
      		await pageCollection.generate();
			const dynamicCodeGen = new DynamicCodeGen();
			dynamicCodeGen.genDeps();
          }
	}
}