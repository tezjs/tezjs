const TEZ_CONFIG={  
    strapi: { 
        version:4,
    },
}
import { PageCollection } from "@tezjs/payload";
async function init(){
    const pageCollection = new PageCollection(TEZ_CONFIG);
    await pageCollection.generate();
}
init()
export default TEZ_CONFIG;