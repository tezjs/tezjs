import axios from 'axios';
import path from 'path';
import fs from 'fs';

import { name, version } from '../package.json';

const robotsModule: any = async function robotModule() {
    const nuxtInstance = this;
    nuxtInstance.nuxt.hook('generate:before', async (builder) => {
        if (nuxtInstance.options.tez && nuxtInstance.options.tez.strapi && nuxtInstance.options.tez.strapi.apiUri) {
            console.log(`Generating robots.txt`)
            const apiUri = nuxtInstance.options.tez.strapi.apiUri;
            const { data } = await axios.get(apiUri + '/robots');
            const extraFilePath = path.join(
                builder.nuxt.options.rootDir, "static", "robots.txt"
            )
            await fs.writeFileSync(extraFilePath, data.rules);
            console.log(`Generated robots`)
        }
    })
};

(robotsModule as any).meta = { name, version }

export default robotsModule