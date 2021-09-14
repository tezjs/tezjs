import { ASTERISK, BLANK, META_TAGS, TAGS_SEO, URL_PROPS } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import tagBuilder from "../domain/tag-builder";
import { readProp } from "./read-prop";

export function getDynamicPageRecord(pageContent: any,tag, currentUrl: string) {
    let pageUrl = readProp(pageContent, URL_PROPS);
    pageUrl = pageUrl.replace(ASTERISK, BLANK);
    currentUrl = currentUrl.replace(pageUrl, BLANK);
    let result = defaultContainer.getDynamicPageCollection(pageContent.DynamicPage, (t) => readProp(t, URL_PROPS) === currentUrl);
    let item = result[0];
    if (item && (item[META_TAGS] || item[TAGS_SEO])) {
        tagBuilder(item, tag);
        delete item[META_TAGS];
        delete item[TAGS_SEO]
    }
    return result;
}