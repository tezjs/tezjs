export default function converQueryToJsonObject(queryObject, entity) {
    var query = {};
    if (queryObject && queryObject.query) {
        Object.keys(queryObject.query).forEach(key => {
            let keyValue = queryObject.query[key];
            if (keyValue.startsWith("#")) {
                const splitText = keyValue.split(".");
                var text = undefined;
                splitText.forEach(t => {
                    if (!text)
                        text = entity[t.replace("#", "")];
                    else
                        text = text[t];
                })
                keyValue = text;
            }
            query[key] = keyValue;
        });
    }
    return query;
}
