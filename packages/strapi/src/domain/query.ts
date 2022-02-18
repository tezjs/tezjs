import SnakeCase from "../sanitizers/snake-case.sanitizer"
import axios from 'axios';
import jsonToString from "../utils/json-to-string";
import { defaultContainer } from "../const/core.const";
import converQueryToJsonObject from "../utils/convert-query-to-json-object";
import { RequestService } from "./request.server";

export default async function dataRequest(queryObject, entity) {
    const apiUri = defaultContainer.moduleOptions.apiUri
    const limit = defaultContainer.moduleOptions.limit;
    const version = defaultContainer.moduleOptions.version;
    const entityQueryParams = defaultContainer.moduleOptions.payload.entityQueryParams;
    const strapiEntity = SnakeCase(queryObject.entity);
    const requestService = new RequestService();
    if (entityQueryParams && entityQueryParams[strapiEntity.trim()]) {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
        Object.keys(entityQueryParams[strapiEntity.trim()]).forEach(key=>queryObject.query[key] = entityQueryParams[strapiEntity.trim()][key])
    }
    let url = `/${strapiEntity}`;
    if (queryObject && queryObject.query && queryObject.query.queryString)
        url = `${url}/?${queryObject.query.queryString}${(version > 3) ? '' :`&_limit=${limit}`}`
    else{
        
            queryObject.query.queryString = jsonToString(converQueryToJsonObject(queryObject, entity));
            url = `${url}/?${queryObject.query.queryString}&_limit=${limit}`    
    }
    return await requestService.get(url);
}


