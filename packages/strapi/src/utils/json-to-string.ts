import { AND_OPERATOR, EQUALTO } from "../const/app.const";

export default function jsonToString(jObject) {
    var queryString = '';
    Object.keys(jObject).forEach((t, i) => {
        if (i > 0)
            queryString += AND_OPERATOR;
        queryString += t + EQUALTO + jObject[t];
    })
    return queryString;
}