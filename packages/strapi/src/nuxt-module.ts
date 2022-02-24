import { name, version } from '../package.json';
import { PageCollection,StrapiModuleConfig } from "@tezjs/payload";
import { generatePayload } from './functions/generate-payload';

const strapiModule: any = async function strapiModule() {
    const nuxtInstance = this as any;
    this.nuxt.hook('build:before', async () => {
        await generatePayload(nuxtInstance.options.tez.strapi)
    })
};

(strapiModule as any).meta = { name, version }

export default strapiModule