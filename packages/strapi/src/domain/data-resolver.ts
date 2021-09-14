import { META_TAGS, TAGS_SEO } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import Query from './query';
export default async function DataResolver(pageContent) {
    const collectionQuery = defaultContainer.moduleOptions.collectionQuery;
    if (collectionQuery && collectionQuery[pageContent.Type]) {
        const result = await Query(collectionQuery[pageContent.Type], pageContent);
        if (!pageContent.GenericSection)
            pageContent.GenericSection = [];
        result.forEach(t => {
            //if (t.MetaTags)
            //    pageContent.GenericSection.push({ [STRAPI_COMPONENT_FIELD]: META_TAGS, ...t.MetaTags });
            //if (t.SEO)
            //    pageContent.GenericSection.push({ [STRAPI_COMPONENT_FIELD]: TAGS_SEO, ...t.SEO });

            pageContent.GenericSection.push(t);
        });
    }
    return pageContent;
}
