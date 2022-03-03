import { IndexHtmlTransformContext, IndexHtmlTransformResult, Plugin } from "vite"
import { commonContainer } from "@tezjs/common"
import { HtmlPage } from "./src/domain/html-page";
export function tezVite(): Plugin {
	return {
		name: "vite:tezVite",
		transformIndexHtml: {
			enforce: "post",
			transform(html: string, ctx?: IndexHtmlTransformContext): IndexHtmlTransformResult {
				// Only use this plugin during build
				if (!ctx || !ctx.bundle) return html
				let routes = commonContainer.getAppRoutes();
				
				for(var route of routes){
					let htmlPage = new HtmlPage(html)
					htmlPage.createPage(route)
				}
				var files = []
				// Get the bundle
				let extraCode = ""
				for (const [, value] of Object.entries(ctx.bundle)) {
					const o = value as OutputChunk
					const a = value as OutputAsset
					
					if (o.code) {
						const reScript = new RegExp(`<script type="module"[^>]*?src="[\./]*${o.fileName}"[^>]*?></script>`)
						const code = `<script type="module">\n//${o.fileName}\n${o.code}\n</script>`

                        files.push(o.fileName)
					} else if (value.fileName.endsWith(".css")) {
						const reCSS = new RegExp(`<link rel="stylesheet"[^>]*?href="/?${value.fileName}"[^>]*?>`)
						const code = `<!-- ${a.fileName} --><style type="text/css">\n${a.source}\n</style>`
						files.push(o.fileName)
						//html = html.replace(reCSS, (_) => code)
					} else {
						extraCode += "\n<!-- ASSET NOT INLINED: " + a.fileName + " -->\n"
					}
				}
                console.log(files)
				return html;
			},
		},
        async buildStart() {
            console.log("build start called")
          }
	}
}