const componentNames = require('./config/component-names')
const collectionQuery = require("./config/collection-query")
const componentDataFieldSelectors = require("./config/component-data-field-selector")
function readingTime(dataItem) {
    if(dataItem.LongText){
        var regex = /<(.|\n)[^>]*?>/g;
        var wordsPerMinute = 200;
        let minutesBlogDetail = 0;
        var contentString = JSON.stringify(dataItem.LongText);
        var resultString = contentString.replace(regex, "");
        let resultJSON = JSON.parse(resultString);
        let words;
        if (Array.isArray(resultJSON)) {
          words = resultJSON.reduce((x, y) => x + " " + y, []).trim().split(" ").length;
        } else {
          words = resultJSON.split(/[.\n\s]/).filter((x) => String(x).trim()).length;
        }
        minutesBlogDetail = Math.round(words / wordsPerMinute);
        dataItem.readingTime = minutesBlogDetail;
        return dataItem;
    }
    return dataItem;
  };
  
module.exports = {
    isProd: process.env.IS_PROD,
    siteUrl: process.env.SITE_URL, 
    strapi: { 
        apiUri: process.env.API_URL, 
        componentNames: componentNames,
        collectionQuery: collectionQuery,   
        componentDataFieldSelectors: componentDataFieldSelectors,
        payload:{
            page:{
                dataSanitizers:[
                    {
                        sanitizer:(item)=> {item.TitleReferenceCode = item.VueReferenceCode.includes("#") ? item.VueReferenceCode.split("#")[1] : 'D'; return item; }
                    },
                    {
                        componentName:"Blog_details",
                        sanitizer:readingTime
                    }
                ]
             }
        }
    } 
}       
                   