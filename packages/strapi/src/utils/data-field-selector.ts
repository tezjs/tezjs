import { toCamelCase } from "../sanitizers/to-camelcase.sanitizer";

export default function dataFieldSelector(data, fields) {
    var jObject = [];
    data.forEach(item => {
        var itemObject = {};
        fields = !fields ?  Object.keys(item): fields;
        fields.forEach(t => {
            if (Array.isArray(t)) {
                itemObject[toCamelCase(t[0])] = t[1](item[t[0]]) + '...';
            } else
                itemObject[toCamelCase(t)] = item[t];
        })
        jObject.push(itemObject);
    });
    return jObject;
}
