import { PageCollection,StrapiModuleConfig } from "@tezjs/payload";

export async function generatePayload(config:StrapiModuleConfig){
    const pageCollection = new PageCollection(config);
    await pageCollection.generate();
}