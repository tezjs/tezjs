export function urlElement(sitemap: { [key: string]: any }) {
    return `<url>\n
             <loc>${sitemap.loc}</loc>\n
             <lastmod>${sitemap.lastmod}</lastmod>\n
             <changefreq>${sitemap.changefreq}</changefreq>\n
             <priority>${sitemap.priority}</priority>\n'
            </url>\n`;
}