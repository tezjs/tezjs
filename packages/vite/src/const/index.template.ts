import { HtmlPage } from "@tezjs/types"
import { Seo } from "../domain/seo"

export const indexTemplate = (html:HtmlPage)=>{
    let seoObject = new Seo(html.head);
    return `<!DOCTYPE html>
    <html lang="${html.lang || 'en'}">
      <head>
        ${seoObject.getElements()}
      </head>
      <body>
        <div id="tez_app"></div>
        <script type="module" src="/tez.ts"></script>
      </body>
    </html>`
}

