import { commonContainer } from "@tezjs/common";
import { PageCollection } from "@tezjs/payload";
import { JsCodeGen } from "../domain/html/js-code-gen";

export async function refreshData(url:string){
    
    const pageCollection = new PageCollection();
    await pageCollection.generate(url);
    let route = commonContainer.getAppRoutes().filter(route=>route.path === url)[0];
    const jsCodeGen = new JsCodeGen(route);
    jsCodeGen.gen();
}