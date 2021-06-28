import { CANONICAL, DATA_CONTROL_ALL, DATA_CONTROL_FIELD_VALUE, META_TAGS, STRAPI_COMPONENT_FIELD, TAGS_SEO, VUE_REFERENCE_CODE } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import cleanObject from "../sanitizers/clean-object.sanitizer";
import removeSpace from "../sanitizers/remove-space.sanitizer";
import dataFieldSelector from "../utils/data-field-selector";
import getUrl from "../utils/get-url";
import DataResolver from "./data-resolver";
import getSitemapObject from "./get-sitemap-object";
import dataRequest from "./query";
import tagBuilder from "./tag-builder";

export default async function parseStrapiData(pageContent, url, dynamicData) {
    const moduleOptions = defaultContainer.moduleOptions;
    let GenericSection = [];
    pageContent = await DataResolver(pageContent);
    if (pageContent && pageContent.GenericSection)
        GenericSection = pageContent.GenericSection;
    const Tag = {
        title: '', Link: {}, MetaPropertyTags: [], MetaNameTags: [], PageSchema: ''
    };
    let components = [];
    for (let i = 0; i < GenericSection.length; i++) {
        let item = GenericSection[i];
        let componentName = removeSpace(item[VUE_REFERENCE_CODE] || item[STRAPI_COMPONENT_FIELD]);
        item.dynamic = dynamicData;
        if (moduleOptions.componentNames[componentName]) {
            if ((item[STRAPI_COMPONENT_FIELD] === DATA_CONTROL_ALL || item[STRAPI_COMPONENT_FIELD] === DATA_CONTROL_FIELD_VALUE) && moduleOptions.componentDataFieldSelectors[moduleOptions.componentNames[componentName]]) {
                let query = {};
                if (item[STRAPI_COMPONENT_FIELD] === DATA_CONTROL_FIELD_VALUE)
                    query[item.Field] = item.Value;
                let queryResult = await dataRequest({ entity: item.CollectionType, query: query }, item);
                let result = dataFieldSelector(queryResult, moduleOptions.componentDataFieldSelectors[moduleOptions.componentNames[componentName]]);
                result.forEach(t => { t.hide = false });
                item.dynamicResult = result;
            }
            components.push({ id: parseInt(String( Math.random() * 10000000)), name: moduleOptions.componentNames[componentName], style: { 'min-height': 'auto' }, data: cleanObject(item), serverBinding: i > 2 ? false : true });
        }
        else if (item[STRAPI_COMPONENT_FIELD] === META_TAGS || item[STRAPI_COMPONENT_FIELD] === TAGS_SEO) {
            tagBuilder(item, Tag);
        }
    }
    if (dynamicData && dynamicData.metaTags)
        tagBuilder(dynamicData.metaTags, Tag);
    if (dynamicData && dynamicData.seo)
        tagBuilder(dynamicData.seo, Tag);

    if (Object.keys(Tag.Link).length === 0)
        Tag.Link = { rel: CANONICAL, href: moduleOptions.siteUrl + getUrl(url) };
    let removeIndex = [];
    components.forEach((component, index) => {
        if (component.data.ComponentReferencePath) {
            let componentNames = component.data.ComponentReferencePath.split(".");
            componentNames.forEach(t => {
                let componentName = moduleOptions.componentNames[t]
                let referenceComponent = components.filter(x => x.name === componentName)[0];
                if (referenceComponent && referenceComponent.data) {

                    if (!referenceComponent.data[component.name])
                        referenceComponent.data[component.name] = {};
                    referenceComponent.data[component.name] = component;
                    removeIndex.push(component);
                }
            })
        }
    })
    removeIndex.forEach(t => {
        let indexOf = components.indexOf(t);
        if (indexOf !== -1)
            components.splice(indexOf, 1);

    })
    return {
        components: components, tags: Tag, siteMap: getSitemapObject(pageContent, Tag)
    };
}