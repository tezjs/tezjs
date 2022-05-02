import { readFileSync } from "@tezjs/common";
import { writeFileSync } from "../utils/write-file";
import { PathResolver } from "./path-resolver";

export class Sitemap{
    sitemap:any   ={};
    pathResolver:PathResolver;
    constructor(){
        this.pathResolver = new PathResolver();
        this.sitemap  = readFileSync(this.pathResolver.sitemapJsonPath) || {}
    }

    add(page:any){
        if (page && page.sitemap && Object.keys(page.sitemap).length > 0) 
            this.sitemap[page.sitemap.loc] = page.sitemap;
    }

    save(){
        const notMapped = [];
            let sitemapUris = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
            Object.keys(this.sitemap).forEach(urlNode => {
                if (this.sitemap[urlNode].priority)
                    sitemapUris += this.xmlElement(this.sitemap[urlNode]);
                else
                    notMapped.push(urlNode);
            })
            sitemapUris +=`</urlset>`
            writeFileSync(this.pathResolver.sitemapXmlPath,sitemapUris,true)
            writeFileSync(this.pathResolver.sitemapNotMappedJsonPath,notMapped)
    }

    xmlElement(sitemap: { [key: string]: any }) {
        return `<url>\n
                 <loc>${sitemap.loc}</loc>\n
                 <lastmod>${sitemap.lastModified}</lastmod>\n
                 <changefreq>${sitemap.changeFrequency}</changefreq>\n
                 <priority>${sitemap.priority}</priority>\n
                </url>\n`;
    }
}