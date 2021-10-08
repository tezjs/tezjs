const componentNames = require('./config/component-names')
const collectionQuery = require("./config/collection-query")
const componentDataFieldSelectors = require("./config/component-data-field-selector")
module.exports = {
    isProd: process.env.IS_PROD,
    siteUrl: process.env.SITE_URL, 
    strapi: { 
        apiUri: process.env.API_URL, 
        componentNames: componentNames,
        collectionQuery: collectionQuery,   
        componentDataFieldSelectors: componentDataFieldSelectors,
    } 
}       
                   