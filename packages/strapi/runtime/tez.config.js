const componentNames = require('./config/component-names')
const collectionQuery = require("./config/collection-query")
const componentDataFieldSelectors = require("./config/component-data-field-selector")
console.log(process.env.NODE_ENV)
module.exports = {
    strapi: {
        isProd: process.env.IS_PROD,
        apiUri: process.env.API_URL,
        componentNames: componentNames,
        collectionQuery: collectionQuery, 
        componentDataFieldSelectors: componentDataFieldSelectors
    }
}
