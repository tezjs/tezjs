import { commonContainer } from '@tezjs/common'
export const QUERY_PARAMS : { [key:string] :any} = {
    3:{
        limit:{
            "_limit":()=> commonContainer.getStrapiConfig().limit
        },
        locale:{
            "_locale":(value)=>value
        }
    },
    4:{
        limit: {
          pagination: {
            pageSize: () => commonContainer.getStrapiConfig().limit,
          },
        },
        locale: {
          "locale": (value) => value
        },
        populate:{ populate: 'deep'},
        seoPopulate:{populate:'deep'}
    }
}