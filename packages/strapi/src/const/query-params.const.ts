import { SEO_POPULATE } from "./app.const";
import { defaultContainer } from "./core.const";

export const QUERY_PARAMS : { [key:string] :any} = {
    3:{
        limit:{
            "_limit":()=> defaultContainer.moduleOptions.limit
        },
        locale:{
            "_locale":(value)=>value
        }
    },
    4:{
        limit: {
          pagination: {
            pageSize: () => defaultContainer.moduleOptions.limit,
          },
        },
        locale: {
          "locale": (value) => value
        },
        populate:{ populate: '*'},
        seoPopulate:{populate:SEO_POPULATE}
    }
}