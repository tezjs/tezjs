import SnakeCase from "../sanitizers/snake-case.sanitizer"
import jsonToString from "../utils/json-to-string";
import converQueryToJsonObject from "../utils/convert-query-to-json-object";
import { RequestService } from "./request.server";
import { getQueryParams } from "../utils/get-query-params";
import { commonContainer } from "@tezjs/common"

export default async function dataRequest(queryObject, entity) {
    const entityQueryParams = commonContainer.getStrapiConfig().payload.entityQueryParams;
    const strapiEntity = SnakeCase(queryObject.entity);
    const requestService = new RequestService();
    if (entityQueryParams && entityQueryParams[strapiEntity.trim()]) {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
        Object.keys(entityQueryParams[strapiEntity.trim()]).forEach(key=>queryObject.query[key] = entityQueryParams[strapiEntity.trim()][key])
    }
    let url = `/${strapiEntity}`;
    if (queryObject && queryObject.query && queryObject.query.queryString)
        url = `${url}/?${queryObject.query.queryString}`
    else{
            queryObject.query.queryString = jsonToString(converQueryToJsonObject(queryObject, entity));
            url = `${url}/?${queryObject.query.queryString}&${getQueryParams(['limit','populate'])}`    
    }
    return await requestService.get(url);
}


