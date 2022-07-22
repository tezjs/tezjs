import { Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { generateSW } from "./service-worker/generate-sw";
import { readConfig } from "../functions/read-config";
import { PageCollection } from "@tezjs/payload";
import { JsCodeGen } from "./html/js-code-gen";
import { HtmlGen } from "./html-gen";
import { depsContainer } from "../const/deps-container.const";

export function tez(): Plugin {
	return {
		name: "vite:tez",
		async closeBundle(){
			if(depsContainer.deps){
				const htmlGen = new HtmlGen();
				await htmlGen.build();
					generateSW();
			}
			
		},
        async buildStart() {
			await readConfig();
			if(commonContainer.buildOptions.commandName === "dev"){
				const pageCollection = new PageCollection();
				await pageCollection.generate();
				commonContainer.getAppRoutes().forEach(route=>{
				  const jsCodeGen = new JsCodeGen(route);
				  jsCodeGen.gen();
				})	
			}
          }
	}
}