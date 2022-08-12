## Plugin Direcotry  

this is to be used to register the custom directives, components or third party plugins. To make it working you have to create index.ts file and export the function.
here is the code example:

```js
export default function(vue:any){
    vue.use(markdown, {});
    vue
      .directive("...",{...})
      .mixin({...})    
}
```
