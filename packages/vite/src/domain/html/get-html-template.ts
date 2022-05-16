import { deepMerge,writeFileSync,CommonPathResolver } from "@tezjs/common";
import { HtmlPage } from "@tezjs/types";
import { TEZ_HTML_DEFAULT } from "../../const/html-default.const";
import { indexTemplate } from "../../const/index.template";

export function getHtmlTemplate(page:HtmlPage){
    
    const htmlPage:HtmlPage = deepMerge(TEZ_HTML_DEFAULT,page || {});
    const template= indexTemplate(htmlPage);
    return template;

}