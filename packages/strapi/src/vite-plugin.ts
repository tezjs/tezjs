import { StrapiModuleConfig } from "@tezjs/payload";
import { generatePayload } from "./functions/generate-payload";

export function strapiDataExtractor(config:StrapiModuleConfig){
    return {
        name:'tezjs-strapi-data-extractor',
        async buildStart(){
            await generatePayload(config)
        }
    }
}