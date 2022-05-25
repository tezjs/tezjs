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
                    sitemapUris += this.xmlElement(this.sitemap[urlNode]);
            })
            sitemapUris +=`</urlset>`
            writeFileSync(this.pathResolver.sitemapXmlPath,sitemapUris,true)
            writeFileSync(this.pathResolver.sitemapNotMappedJsonPath,notMapped)
            writeFileSync(this.pathResolver.sitemapJsonPath,this.sitemap)
    }

    xmlElement(sitemap: { [key: string]: any }) {
        let xElement:Array<String> = new Array<String>();
        xElement.push(`<url>\n`)
        xElement.push(`<loc>${sitemap.loc}</loc>\n`);
        if(sitemap.lastModified)
            xElement.push(`<lastmod>${sitemap.lastModified}</lastmod>\n`);
        if(sitemap.changeFrequency)
            xElement.push(`<changefreq>${sitemap.changeFrequency}</changefreq>\n`);
        if(sitemap.priority)
            xElement.push(`<priority>${sitemap.priority}</priority>\n`)
        xElement.push(`</url>\n`);
        return xElement.join("")
    }
}