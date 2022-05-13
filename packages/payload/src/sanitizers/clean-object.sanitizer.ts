import { MarkdownIt } from "../markdown/markdown-it";
import { isArray,isObject } from "@tezjs/common"

import { toCamelCase } from "./to-camelcase.sanitizer";
import urlReplacer from "./url-replacer.sanitizer";
import { commonContainer } from "@tezjs/common"

function clear(jsonObject: { [key: string]: any }, isRoot: boolean):any {
    let strapiConfig = commonContainer.getStrapiConfig();
    let htmlSanitizer = strapiConfig.payload.page.htmlSanitizer;
    const version = strapiConfig.version;
    var jObject = {};
    Object.keys(jsonObject).forEach(t => {
        var keyName = toCamelCase(t);
        if (jsonObject[t] && isObject(jsonObject[t])) {
            if (!ignoreColumns(t, isRoot)){
                if(version === 4 && keyName==="attributes"){
                    jObject = {...jObject,...clear(jsonObject[t], false)}
                }else
                    jObject[keyName] = clear(jsonObject[t], false);
            }
        } else if (jsonObject[t] && isArray(jsonObject[t])) {
            if (!ignoreColumns(t, isRoot)) {
                jObject[keyName] =[];
                for (let i = 0; i < jsonObject[t].length; i++) {
                    jObject[keyName].push(clear(jsonObject[t][i], false));
                }
            }
        } else if (jsonObject[t] !== null && jsonObject[t] !== "" && !ignoreColumns(t, isRoot)) {
            var content = jsonObject[t];
            if (t === "LongText" || t === "Content") {
                var pattern = /!\[(.*?)\]\((.*?)\)/mg;
                var matcher;
                var masterContent = content
                while ((matcher = pattern.exec(content)) !== null) {
                    if (matcher.length > 2) {
                        var urlText = matcher[2];
                        var altText = matcher[1];
                        var newUrlText = urlText.slice(0, urlText.length - 1) + "||" + altText + '"';
                        masterContent = masterContent.replace(urlText, newUrlText);
                    }
                }
                content = MarkdownIt.render(masterContent);
                content = content ? content.split("\n").map((x:any)=>x.trim()) : content;
                if(htmlSanitizer)
                    content = htmlSanitizer(content);
            }
            jObject[keyName] = urlReplacer(content,keyName);
        }


    })
    return jObject;
}

function ignoreColumns(name, isRoot) {
    let columns = commonContainer.getStrapiConfig().ignoreColumns || [];
    return columns.filter(t => t === name)[0]
}

export default function cleanObject(jObject: { [key: string]: any }):any {
    if(Array.isArray(jObject)){
        let items:any[] = [];
        jObject.forEach(item=>{
           items.push(clear(item, true)); 
        })
        return items
    }
    return clear(jObject, true);
}
