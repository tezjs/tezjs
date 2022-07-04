import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { generateSW } from "./service-worker/generate-sw";
import { readConfig } from "../functions/read-config";
import { PageCollection } from "@tezjs/payload";
import { JsCodeGen } from "./html/js-code-gen";
import { HtmlGen } from "./html-gen";

export function tez(): Plugin {
	return {
		name: "vite:tez",
		closeBundle(){
			const htmlGen = new HtmlGen();
			htmlGen.build();
				generateSW();
		},
        async buildStart() {
			await readConfig();
			const pageCollection = new PageCollection();
      		await pageCollection.generate();
			  commonContainer.getAppRoutes().forEach(route=>{
				const jsCodeGen = new JsCodeGen(route);
				jsCodeGen.gen();
			  })
          }
	}
}