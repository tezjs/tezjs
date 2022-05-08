import { getValueByPath } from "./get-value-by-path";

export default function converQueryToJsonObject(queryObject, entity) {
    var query = {};
    if (queryObject && queryObject.query && !queryObject.query.queryString) {
        Object.keys(queryObject.query).forEach(key => {
            let keyValue = queryObject.query[key];
            if (keyValue.startsWith("#")) {
                keyValue = getValueByPath(keyValue, entity);
            }
            query[key] = keyValue;
        });
    }
    return query;
}
