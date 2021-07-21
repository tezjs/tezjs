import { getValueByPath } from "./get-value-by-path";

export function parseQueryString(queryString: string, queryObject: {[key:string]:any}) {
    const splitQueryString = queryString.split(new RegExp('{{(.*?)}}', 'g'));
    splitQueryString.forEach(t => {
        if (t.indexOf("=") === -1) {
            let value = getValueByPath(t, queryObject);
            queryString = queryString.replace(`{{${t}}}`, value);
        }
    })
    return queryString;
}