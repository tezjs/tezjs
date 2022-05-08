import { minify } from 'html-minifier';
export function minifyJs(content:string){
return minify(content,{minifyJS:true,collapseWhitespace: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true})
}