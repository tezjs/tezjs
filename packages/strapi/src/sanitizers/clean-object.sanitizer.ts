import { defaultContainer } from "../const/core.const";
import { MarkdownIt } from "../markdown/markdown-it";
import isArray from "../utils/is-array";
import isObject from "../utils/is-object";
import { toCamelCase } from "./to-camelcase.sanitizer";
import urlReplacer from "./url-replacer.sanitizer";


function clear(jsonObject: { [key: string]: any }, isRoot: boolean):any {
    let htmlSanitizer = defaultContainer.moduleOptions.payload.page.htmlSanitizer;
    const version = defaultContainer.moduleOptions.version;
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
            jObject[keyName] = urlReplacer(content);
        }


    })
    return jObject;
}

function ignoreColumns(name, isRoot) {
    let columns = defaultContainer.moduleOptions.ignoreColumns;
    //columns = isRoot ? columns : columns.concat(["MetaTags", "SEO"]);
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
