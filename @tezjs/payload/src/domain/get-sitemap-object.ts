import { CHANGE_FREQUENCY, PRIORITY } from "../const/app.const";
import { readProp } from "../utils/read-prop";

export default function getSitemapObject(pageObject, url,updated) {
    var jObject:any = {};
    const changeFrequency = readProp(pageObject,CHANGE_FREQUENCY);
    const priority = readProp(pageObject,PRIORITY);
        if (updated && changeFrequency && priority !== undefined) {
            var dt = new Date(updated);
            var date = dt.getFullYear() + '-' + ('0' + (dt.getMonth() + 1)).slice(-2) + '-' + ('0' + dt.getDate()).slice(-2);
            jObject = { loc: url, lastmod: date, changefreq: changeFrequency, priority: priority == 1 ? '1.0' : priority}
        } else {
            jObject.loc = url;
        }
    return jObject;
}