import { name, version } from '../package.json';
const isFirstTime: boolean = false;
const routerModule: any = async function router() {
    const nuxtInstance = this;
    nuxtInstance.nuxt.hook('build:before', async (builder) => {
        if (nuxtInstance.options.tez && nuxtInstance.options.tez.strapi && isFirstTime) {
            
        }
    })
};

(routerModule as any).meta = { name, version }

export default routerModule