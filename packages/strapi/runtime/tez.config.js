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
        dataItem.ReadingTime = minutesBlogDetail;
        return dataItem;
    }
    return dataItem;
  }; 
    
  
 
  function blockquote(elements,startIndex,elementStrings) {
    var lastIndexCount = startIndex;
    for(var i=startIndex;i<elements.length;i++){
        let elementString = elements[i];
        var regex = new RegExp("<a.*?</a>");
        if(elementString.indexOf("<h4") !== -1 && elementString.indexOf("<a") !== -1){
            let matchResult = regex.exec(elementString);
            if(matchResult && matchResult.length > 0){
                elementString = elementString.replace(matchResult[0],"");
                elementStrings.push(elementString);
                elementStrings.push(matchResult[0]);
            }
        }else
            elementStrings.push(elementString)
        if(elementString.indexOf("</blockquote") !== -1)
        {
            lastIndexCount = i;
            break;
        }
    }
    return lastIndexCount;
}

function assignId(elementString,elementStrings) {
    let idRegex = new RegExp("{#.*?}");
    let elementRegex = new RegExp("<h2");
    let extractId = idRegex.exec(elementString);
    let extractElement = elementRegex.exec(elementString);
    if(extractId && extractId.length > 0 && extractElement && extractElement.length > 0){
        let id = extractId[0].replace(/({|#|})/g,"")
        elementString= elementString.replace(extractId[0],"");
        elementString= elementString.replace(extractElement[0],`${extractElement[0]} id="${id}"`);
        elementStrings.push(elementString)
    }else  
    elementStrings.push(elementString);
}
                  

function htmlParser(htmlStrings){
      var elementStrings = [];
      let idRegex = new RegExp("{#.*?}");
      for(var i=0;i<htmlStrings.length;i++){
          let htmlString = htmlStrings[i];
          if(htmlString.indexOf("<blockquote") !== -1){
             i= blockquote(htmlStrings,i,elementStrings)
          }else if(idRegex.test(htmlString)){
              assignId(htmlString,elementStrings);
          } else  {
              elementStrings.push(htmlString);
          }
      }
      return elementStrings;
  } 
     
module.exports = {
      
    isProd: process.env.IS_PROD,
    siteUrl: process.env.SITE_URL,  
    strapi: { 
        version:4,
        apiUri: process.env.API_URL,   
        componentNames: componentNames,
        collectionQuery: collectionQuery,   
        componentDataFieldSelectors: componentDataFieldSelectors,
        optimization: {
                sourcePagination:true,
                sourcePaginationByUrl:[{url:'/blog',components:["blog-list"]}]
            },
        media:{
            uris:process.env.STRAPI_IMAGE_URIS, 
            cdnUri:process.env.IMAGE_CDN_URL
        }  ,  
        payload:{ 
            page:{  
                dataSanitizers:[
                    { 
                        sanitizer:(item)=> {if(item.VueReferenceCode){
                            item.TitleReferenceCode = item.VueReferenceCode.includes("#") ? item.VueReferenceCode.split("#")[1] : 'D'; 
                            item.VueReferenceCode = item.VueReferenceCode.includes("#") ? item.VueReferenceCode.split("#")[0] : item.VueReferenceCode;
                        }  return item; }
                    },
                    { 
                        toPass:(url,componentName,parentComponentName)=>{
                            return parentComponentName === "Blog_Listing" && componentName === "Blog_details"
                        }, 
                        sanitizer:readingTime 
                    }
                ],
                htmlSanitizer:htmlParser
             }  ,
             entityQueryParams:{
                 "blogs":{"_sort":"created_at:DESC"}
             }
        }
    } 
}       
                   