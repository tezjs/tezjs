import { name, version } from '../package.json';
import path from 'path';
import fs from 'fs';
import { urlElement } from './utils/sitemap-url-element';
import { getSitemapXml } from './utils/get-sitemap-xml';
const sitemapModule: any = async function module(moduleOptions: any) {
    const nuxtInstance = this;
    nuxtInstance.nuxt.hook('generate:before', async (builder) => {
        console.log(`Generating Sitemap`)

        const sitemapFile = path.join(...[builder.nuxt.options.rootDir, "node_modules/.cache/tez", "sitemap.json"])
        const staticFolderPath  = path.join(...[builder.nuxt.options.rootDir, "static"])
        const fileExists = await fs.existsSync(sitemapFile)
        if (fileExists) {
            const result = await fs.readFileSync(sitemapFile, 'utf8');
            const sitemapJson = JSON.parse(result)
            const notMapped = [];
            let sitemapUris = '';
            Object.keys(sitemapJson).forEach(urlNode => {
                if (sitemapJson[urlNode].priority)
                    sitemapUris += urlElement(sitemapJson[urlNode]);
                else
                    notMapped.push(urlNode);
            })
            const siteMapPath = path.join(
                staticFolderPath, 'sitemap.xml'
            );
            const notsiteMapPath = path.join(
                staticFolderPath, 'not-mapped.json'
            );
            await fs.writeFileSync(siteMapPath, getSitemapXml(sitemapUris));
            await fs.writeFileSync(notsiteMapPath, JSON.stringify(notMapped));
        }
        console.log(`Sitemap Generated`)
    })
};

(sitemapModule as any).meta = { name, version }

export default sitemapModule