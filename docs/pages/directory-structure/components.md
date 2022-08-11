## Component Directory  

Component Directory is used to put all your components for whole applicaion aftward you can use it inside pages in application or dynamicaly load the component on dynamic page.  

Tezjs automatically import the components for dynamic pages and this only build those components which are in used rather building all components exist in the components directory.     

**Folder structure:**  

| components/  
---|header.vue  
---|footer.vue  

**Example:**  
```html
<template>  
    <header></header>  
</template>  
```
The Fantabulous part of TezJS framework is not to restrict to use the native features of VUE like importing the static/dynamic components. We would love to create those api function which are not easily available in the native framework like creating a dynamic page with bunch of dynamic components page wise, TezJS automatically manage the dynamic part without putting a extra overhead at your end. 

**Direct Imports**  
You can also direct import the components by wrinting the prefix of `'/@/component/<component-name>.vue'`   

**Example:**  

<template>   
    <header></header>   
</template>  

<scripts>  
import {header} from '/@/components/header'  
</scripts>  

 
