import { commonContainer } from "@tezjs/common";
import { Seo } from "../domain/seo"

export const indexTemplate = (seo:Seo)=>{
    return `<!DOCTYPE html>
<html lang="${seo.htmlMeta.lang || 'en'}">
<head>
        ${seo.headChildElements}
</head>
      <body>
        <div id="tez_app"></div>
        ${commonContainer.buildOptions.commandName === "dev"? '<script type="module" src="/tez.ts"></script>' : ""}
        ${seo.bodyChildElements}
      </body>
    </html>`
}

