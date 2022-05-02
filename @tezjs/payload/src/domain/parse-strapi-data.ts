import {  COLLECTION_TYPE_PROPS, COMPONENT_DATA_PROPS, COMPONENT_REFERENCE_PATH, DATA_CONTROL_ALL, DATA_CONTROL_FILTER, DATA_CONTROL_GET_RECORD, FIELD_COMPONENT_NAME_GET_ALL_DATA, FIELD_COMPONENT_NAME_GET_DATA_FIELD_VALUE, FIELD_COMPONENT_TYPE_NAME, FIELD_DATA_TYPE_RESULT, META_TAGS, META_TAGS_COMPONENT_NAME, META_TAGS_SEO_COMPONENT_NAME, POST_SECTION_PROPS, PRE_SECTION_PROPS, TAGS_SEO, UPDATED_AT, VUE_COMPONENT_NAME, VUE_COMPONENT_NAME_PROPS, VUE_REFERENCE_CODE } from "../const/app.const";
import { defaultContainer } from "../const/core.const";
import { removeAppProps } from "../sanitizers/remove-app-props.sanitizer";
import removeSpace from "../sanitizers/remove-space.sanitizer";
import dataFieldSelector from "../utils/data-field-selector";
import { getComponentName } from "../utils/get-component-name";
import { getDynamicPageRecord } from "../utils/get-dynamic-page-record";
import { getGenericSections } from "../utils/get-generic-sections";
import { getQueryParams } from "../utils/get-query-params";
import getUrl from "../utils/get-url";
import { mergeSeoObject } from "../utils/merge-seo-object";
import { parseQueryString } from "../utils/parse-query-string";
import { getPagePrePostComponents } from "../utils/pre-post-layout";
import { qsStringify } from "../utils/qs-stringify";
import { readProp } from "../utils/read-prop";
import { runDataSanitizer } from "../utils/run-data-sanitizer";
import { sourcePaginationByUrl } from "../utils/source-pagination-by-url";
import { parseObjectValue } from "../utils/value-parser";
import { CollectionIndexer } from "./collection-indexer";
import DataResolver from "./data-resolver";
import getSitemapObject from "./get-sitemap-object";
import dataRequest from "./query";
import tagBuilder from "./tag-builder";

export default async function parseStrapiData(pageContent, url, dynamicData,referenceData) {
    const collectionIndexer = new CollectionIndexer();
    const moduleOptions = defaultContainer.moduleOptions;
    let genericSection = [];
    
    pageContent = await DataResolver(pageContent,url);
    if (pageContent)
    genericSection = getGenericSections(pageContent.masterPage,readProp(pageContent,COMPONENT_DATA_PROPS))
    let parseObjectItem = {referencePageData:referenceData,genericCollections:genericSection};
    const Tag:any = {
        title: '', canonical: '', MetaPropertyTags: [], MetaNameTags: [], PageSchema: ''
    };
    let components = [];
    for (let i = 0; i < genericSection.length; i++) {
        let item = genericSection[i];
        item = referenceData && item.referenceCollection === "Data" ? referenceData:item;
        let componentName = removeSpace(readProp(item,VUE_COMPONENT_NAME_PROPS));
        item = runDataSanitizer(moduleOptions.payload.page.dataSanitizers,item,url,componentName);
        componentName = removeSpace(readProp(item,VUE_COMPONENT_NAME_PROPS)); /// remove this line in future.
        item.dynamic = dynamicData;
        if (getComponentName(componentName)) {
            let collectionType = readProp(item,COLLECTION_TYPE_PROPS);
            if ((collectionType && moduleOptions.version > 3) || ((item[FIELD_COMPONENT_TYPE_NAME] === FIELD_COMPONENT_NAME_GET_ALL_DATA || item[FIELD_COMPONENT_TYPE_NAME] === FIELD_COMPONENT_NAME_GET_DATA_FIELD_VALUE || item[FIELD_DATA_TYPE_RESULT] === DATA_CONTROL_ALL || item[FIELD_DATA_TYPE_RESULT] === DATA_CONTROL_FILTER || item[FIELD_DATA_TYPE_RESULT] === DATA_CONTROL_GET_RECORD) && moduleOptions.componentDataFieldSelectors[getComponentName(componentName)])) {
                let query: { [key: string]: any } = {};
                if (item[FIELD_DATA_TYPE_RESULT] === DATA_CONTROL_FILTER || item[FIELD_COMPONENT_TYPE_NAME] === FIELD_COMPONENT_NAME_GET_DATA_FIELD_VALUE) {
                    if (item.Field)
                        query[item.Field] = item.Value;
                    else if (item.FilterQueryString)
                        query.queryString = parseQueryString(item.FilterQueryString, item);
                }else if(item.queryParams)
                    query.queryString = `${qsStringify(parseObjectValue(item.queryParams,parseObjectItem))}&${getQueryParams(['limit','populate'])}` 
                const queryResult = item[FIELD_DATA_TYPE_RESULT] === DATA_CONTROL_GET_RECORD ? getDynamicPageRecord(pageContent,Tag, url) : await dataRequest({ entity: collectionType, query: query }, item);
                queryResult.forEach((dataItem,index) => { queryResult[index] = runDataSanitizer(moduleOptions.payload.page.dataSanitizers,dataItem,url,removeSpace( readProp(dataItem,VUE_COMPONENT_NAME_PROPS)),componentName); })
                const result = dataFieldSelector(queryResult, moduleOptions.componentDataFieldSelectors[getComponentName(componentName)]);
                if ((moduleOptions.optimization.sourcePagination && item[FIELD_DATA_TYPE_RESULT] !== DATA_CONTROL_GET_RECORD) 
                    ||
                    sourcePaginationByUrl(url, getComponentName(componentName),item)) 
                    item.dynamicSourcePath = await collectionIndexer.paginate(result, collectionType.toLowerCase(), query.queryString);
                else
                    item.dynamicResult = result;
            }
            delete item.dynamic;
            delete item.seo;
            delete item.masterPage;
            components.push({ id: defaultContainer.getUniqueId(), name: getComponentName(componentName),  data:removeAppProps(item), 

            });
     
        }
        else if (item[FIELD_DATA_TYPE_RESULT] === META_TAGS || item[FIELD_DATA_TYPE_RESULT] === TAGS_SEO || item[FIELD_COMPONENT_TYPE_NAME] === META_TAGS_COMPONENT_NAME || item[FIELD_COMPONENT_TYPE_NAME] === META_TAGS_SEO_COMPONENT_NAME) {
            tagBuilder(item, Tag);
        }
    }

    let seo:any = {};
    if(pageContent && pageContent.masterPage)
        seo = mergeSeoObject([pageContent.masterPage.seo || {},pageContent.seo || {}])
    else if(pageContent.seo)
        seo = mergeSeoObject([{},pageContent.seo || {}])

    if (dynamicData && dynamicData.metaTags)
        tagBuilder(dynamicData.metaTags, Tag);
    if (dynamicData && dynamicData.seo)
        if(moduleOptions.version > 3){
            seo = mergeSeoObject([seo,dynamicData.seo  || {}])
            tagBuilder(seo,Tag)
        }
        else
            tagBuilder(dynamicData.seo, Tag);
    else
        tagBuilder(seo,Tag)

    if (!Tag.canonical)
        Tag.canonical = moduleOptions.siteUrl + getUrl(url);
    let removeIndex = [];
    components.forEach((component, index) => {
        let componentReferencePath = readProp(component.data,COMPONENT_REFERENCE_PATH);
        if (componentReferencePath) {
            let componentNames = componentReferencePath.split(".");
            componentNames.forEach(t => {
                let componentName = getComponentName(t)
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
    if(moduleOptions.version > 3){
        delete Tag.MetaPropertyTags;
        delete Tag.MetaNameTags;
    }
    return {masterPageName:pageContent && pageContent.masterPage && pageContent.masterPage.title ? pageContent.masterPage.title:'',
        components: components,url:getUrl(url), seo: parseObjectValue(Tag,parseObjectItem),redirectRoutes:seo ?seo.redirectRoutes:[], sitemap: getSitemapObject(seo.sitemap || pageContent, Tag.canonical,readProp(pageContent,UPDATED_AT)), sections:getPagePrePostComponents(readProp(pageContent,PRE_SECTION_PROPS)),footerSections:getPagePrePostComponents(readProp(pageContent,POST_SECTION_PROPS))
    };
}