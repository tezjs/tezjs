import qs from "qs";
import { FIELDS, POPULATES } from "../const/app.const";
import { defaultContainer } from "../const/core.const";

export function getQueryString(queryParamsObject:{[key:string]:any}){
    const strapiVersion = defaultContainer.moduleOptions.version;
    const fieldColumnExits = Object.keys(queryParamsObject).filter(key=> key === FIELDS || key === POPULATES)[0];
        const populateParams = fieldColumnExits ? {} : strapiVersion === 3 ? {} : { populate: '*'};
       return qs.stringify({
        ...queryParamsObject,...populateParams
        },{
            encodeValuesOnly: true,
          })
}