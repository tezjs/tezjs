import { defaultContainer } from "../const/core.const";
import path from 'path';
import axios from 'axios';
import getUrl from "../utils/get-url";
import { REMOVE_SPECIAL_CHARACTERS } from "../const/app.regex";
import { CACHE_PATH, UNDERSCORE } from "../const/app.const";
import SnakeCaseSanitizer from "../sanitizers/snake-case.sanitizer";
import { getPath } from "../utils/get-path";
import { createPath } from "../utils/create-path";
import { writeFileSync } from "../utils/write-file";
import parseStrapiData from "./parse-strapi-data";
import cleanObject from "../sanitizers/clean-object.sanitizer";
export class PageCollection {
    async generate(builder) {
        const { apiUri, pageCollectionConfig, limit, payloadRootPath } = defaultContainer.moduleOptions;
        const response = await axios.get(`${apiUri}/${pageCollectionConfig.name}?_limit=${limit}`);
        const dataItems = response.data;
        const routes = []; 
        const dynamicPageRoute = {};
        for (let i = 0; i < dataItems.length; i++) {
            let item = dataItems[i];
            if (item.DynamicPage) {
                const nestedResponse = await axios.get(`${apiUri}/${SnakeCaseSanitizer(item.DynamicPage)}`);
                const dynamicItems = nestedResponse.data;
                for (let j = 0; j < dynamicItems.length; j++) {
                    const dynamicItem = dynamicItems[j];
                    dynamicPageRoute[dynamicItem.NavURL] = {
                        url: item.URL, data: { id: dynamicItem.id, title: dynamicItem.Title, content: dynamicItem.Content, metaTags: dynamicItem.MetaTags, seo: dynamicItem.SEO }
                    };
                    const path = getUrl(dynamicItem.NavURL);
                    if (routes.filter(t => t.path === path).length === 0) {
                        routes.push({
                            name: dynamicItem.Title.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                            path: path
                        })
                    }
                }
                
            } else {
                routes.push({
                    name: item.Title.replace(REMOVE_SPECIAL_CHARACTERS, UNDERSCORE),
                    path: getUrl(item.URL)
                })
            }
        }
        const rootPath = getPath([builder.nuxt.options.rootDir, CACHE_PATH]);
        createPath(rootPath)
        await writeFileSync(getPath([rootPath, 'routes.json']), routes)
        await writeFileSync(getPath([rootPath, 'dynamic-page-routes.json']), dynamicPageRoute)
        const payloadPath = getPath([builder.nuxt.options.rootDir, payloadRootPath, 'payload']);
        var siteMaps = {};
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            let url = getUrl(route.path);
            let baseUrl = url;
            let dynamicData = undefined;

            if (dynamicPageRoute[url]) {
                dynamicData = dynamicPageRoute[url].data;
                baseUrl = url;
                url = dynamicPageRoute[url].url;
            }
            const directoryPath = path.join(payloadPath, baseUrl);
            const isNotExits = createPath(directoryPath);
            if (isNotExits) {
                console.log(baseUrl)
                const apiResult = await axios.get(`${apiUri}/${pageCollectionConfig.name}?${pageCollectionConfig.fieldName.uri}=` + url);
                const page = await parseStrapiData(apiResult.data[0], baseUrl, dynamicData);
                if (page) {
                    let componentIds = [];
                    for (let j = 0; j < page.components.length; j++) {
                        const component = page.components[j];
                        componentIds.push(component.id);
                        const filePath = path.join(
                            directoryPath,
                            component.id + ".json"
                        );
                        component.data.clientComponentName = component.name;
                        await writeFileSync(filePath, component.data);
                    }

                    let filePath = path.join(
                        directoryPath,
                        "tags.json"
                    );
                    await writeFileSync(filePath, cleanObject(page.tags));
                    const fileName = baseUrl.split('/');

                    filePath = path.join(
                        directoryPath,
                        fileName[fileName.length - 1] + ".json"
                    );
                    await writeFileSync(filePath, componentIds);
                    if (page.siteMap && Object.keys(page.siteMap).length > 0)
                        siteMaps[page.siteMap.loc] = page.siteMap;
                }
            }
        }
        await writeFileSync(getPath([rootPath, 'sitemap.json']), siteMaps)
    }
}