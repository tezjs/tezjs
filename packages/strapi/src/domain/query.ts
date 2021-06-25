import SnakeCase from "../sanitizers/snake-case.sanitizer"
import axios from 'axios';
import jsonToString from "../utils/json-to-string";
import { defaultContainer } from "../const/core.const";
import converQueryToJsonObject from "../utils/convert-query-to-json-object";

export default async function dataRequest(queryObject, entity) {
    const apiUri = defaultContainer.moduleOptions.apiUri
    const strapiEntity = SnakeCase(queryObject.entity);
    if (strapiEntity.trim() === "blogs") {
        if (queryObject && !queryObject.query)
            queryObject.query = {};
        queryObject.query["_sort"] = "created_at:DESC";
    }
    const response = await axios.get(`${apiUri}/${strapiEntity}/?${jsonToString(converQueryToJsonObject(queryObject, entity))}`);
    return response.data || [];
}


