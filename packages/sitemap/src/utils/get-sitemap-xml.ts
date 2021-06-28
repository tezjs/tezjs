export function getSitemapXml(uris:string) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n\n';
                    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
                        ${uris}
                    </urlset>`;
}