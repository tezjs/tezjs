import { name, version } from '../package.json';
import { defaultContainer } from "./const/core.const";
import { PageCollection } from "./domain/page-collection";
import { StrapiModuleConfig } from "./interface/strapi-module-config";

const strapiModule: any = async function strapiModule() {
    const nuxtInstance = this;
    nuxtInstance.nuxt.hook('build:before', async (builder) => {
        console.log(`Strapi payload generator start.`)
        if (nuxtInstance.options.tez && nuxtInstance.options.tez.strapi) {
            nuxtInstance.options.tez.strapi.siteUrl = nuxtInstance.options.tez.siteUrl;
            defaultContainer.nuxtInstance = nuxtInstance;
            defaultContainer.setOption(nuxtInstance.options.tez.strapi)
        }
        const pageCollection = new PageCollection(builder);
        await pageCollection.generate();
        console.log(`Strapi payload generator end.`)

    })
};

(strapiModule as any).meta = { name, version }

export default strapiModule