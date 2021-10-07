import { name, version } from '../package.json';
import { FirebaseDomain } from './domain/firebase-domain';

const firebaseModule: any = async function firebase() {
    const nuxtInstance = this;
    nuxtInstance.nuxt.hook('build:before', async (builder) => {
        if (nuxtInstance.options.tez && nuxtInstance.options.tez.strapi) {
            console.log(`Updating firebase json`)
            const firebaseDomain = new FirebaseDomain();
            await firebaseDomain.generate(builder, nuxtInstance);
            console.log(`firebase json updated`)
        }
    })
};

(firebaseModule as any).meta = { name, version }

export default firebaseModule