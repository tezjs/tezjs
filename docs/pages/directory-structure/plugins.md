## plugins directory 

This provides register the third party library, custom mixin, directives or components while initializing the app. 

> create plugins/index.ts file and export the function

```js 
export default function(vue:any){
    vue.use(markdown, {});
    vue
      .directive("...",{...})
      .mixin({...})    
}
```
