import SnakeCase from "../sanitizers/snake-case.sanitizer"
import axios from 'axios';
import jsonToString from "../utils/json-to-string";
import { defaultContainer } from "../const/core.const";
import converQueryToJsonObject from "../utils/convert-query-to-json-object";

export default async function dataRequest(queryObject, entity) {
    const apiUri = defaultContainer.moduleOptions.apiUri
    const limit = defaultContainer.moduleOptions.limit;
    const entityQueryParams = defaultContainer.moduleOptions.payload.entityQueryParams;
    const strapiEntity = SnakeCase(queryObject.entity);
    if (entityQueryParams && entityQueryParams[strapiEntity.trim()]) {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
        Object.keys(entityQueryParams[strapiEntity.trim()]).forEach(key=>queryObject.query[key] = entityQueryParams[strapiEntity.trim()][key])
    }
    let url = `${apiUri}/${strapiEntity}`;
    if (queryObject && queryObject.query && queryObject.query.queryString)
        url = `${url}/?${queryObject.query.queryString}&_limit=${limit}`
    else{
        queryObject.query.queryString = jsonToString(converQueryToJsonObject(queryObject, entity));
        url = `${url}/?${queryObject.query.queryString}&_limit=${limit}`
    }
    const response = await axios.get(url);
    return response.data || [];
}


