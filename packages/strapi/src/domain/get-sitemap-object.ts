export default function getSitemapObject(pageObject, tag) {
    var jObject:any = {};
    var linkHref = tag.Link.href;
    if (pageObject.updated_at && pageObject.ChangeFrequency && pageObject.Priority) {
        var dt = new Date(pageObject.updated_at);
        var date = dt.getFullYear() + '-' + ('0' + (dt.getMonth() + 1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2);
        jObject = { loc: linkHref, lastmod: date, changefreq: pageObject.changeFrequency, priority: pageObject.Priority == 1 ? '1.0' : pageObject.Priority}
    } else {
        jObject.loc = linkHref;
    }
    return jObject;
}