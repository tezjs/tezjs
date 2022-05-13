import { FIELD_COMPONENT_TYPE_NAME,  META_TAGS_COMPONENT_NAME, META_TAGS_SEO_COMPONENT_NAME, VUE_COMPONENT_NAME, VUE_REFERENCE_CODE } from "../const/app.const";
import { commonContainer } from '@tezjs/common'
import removeSpace from "../sanitizers/remove-space.sanitizer";
import { runDataSanitizer } from "../utils/run-data-sanitizer";
import Query from './query';
export default async function DataResolver(pageContent,url) {
    const moduleOptions = commonContainer.getStrapiConfig();
    const collectionQuery = moduleOptions.collectionQuery;
    if (collectionQuery && collectionQuery[pageContent.Type]) {
        const result = await Query(collectionQuery[pageContent.Type], pageContent);
        if (!pageContent.GenericSection)
            pageContent.GenericSection = [];
        result.forEach(item => {
            if (item.MetaTags)
               pageContent.GenericSection.push({ [FIELD_COMPONENT_TYPE_NAME]: META_TAGS_COMPONENT_NAME, ...item.MetaTags });
            if (item.SEO)
               pageContent.GenericSection.push({ [FIELD_COMPONENT_TYPE_NAME]: META_TAGS_SEO_COMPONENT_NAME, ...item.SEO });
            item = runDataSanitizer(moduleOptions.payload.page.dataSanitizers,item,url,removeSpace(item[VUE_REFERENCE_CODE] || item[VUE_COMPONENT_NAME]));
            pageContent.GenericSection.push(item);
        });
    }
    return pageContent;
}
