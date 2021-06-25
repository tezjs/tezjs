import { CHARSET, NAME, PROPERTY } from "../const/app.const";

export default function parseMetaTags(metaTags: {[key:string]:any}) {
    const tags = [];

    metaTags.forEach(tag => {
        var jObject = {};
        if (tag && tag.type === CHARSET) {
            jObject = { [tag.type]: tag.content };
        } else
            jObject = {
                [tag.type === PROPERTY ? PROPERTY : NAME]: tag.title,
                content: tag.content
            };
        tags.push(jObject);
    });
    return tags;
}