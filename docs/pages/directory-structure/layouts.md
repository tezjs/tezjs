## layout directory   

Tezjs can provide a cutsomizable layouts framework which can be used through your application.Layout are for making common ui and or code patterns in to resuable layout components.  

Layouts are placed in the  directory and will be automatically loaded via an asynchronous import when used.    Layouts are used by adding layout poperty as part of your page component.  

**Enabling the default layout**  

Add ~/layouts/default.vue  
```html
    <template>  
            <tez-slot></tez-slot>
    </template>  
```
By creating a default.vue file in the layouts folder. This gives an opportunity to apply on all the page level components which is not using the `layoutName` property in the page component. You don't have to worry about the load the layout component first and reference page level component, TezJS efficiently manage this cumbersome task without any configuration. 
As every application have a different scenarios for loading the layouts. We have covered most of the scenarios as below:

### How to set the specific layout on specific page and rest of the pages would referenced with default layout?
Let's consider a contact page where we want to show the different header and footer on the page.
To achive this we have to perform three actions like :
- Create the header/footer component in `components` directory.
- Create the `contact-layout.vue` file in the layouts component and import the header/footer component in the file. Here is the code example:

```html
<script>
import header from '/@/components/header.vue'
import footer from '/@/components/footer.vue'
export default {
  components:{
    header:header,
    footer:footer
  }
}
</script>
<template>
  <header></header>
  <tez-slot></tez-slot>
  <footer></footer>
</template>
```
- Now we have to create the page component (`contact.vue`) in the `pages` directory and reference the respective layout component name.
```html
<script>
export default {
layoutName:'contact-layout'
}
</script>
<template>
<h1>Contact Page</h1>
</template>
```
Whenever the contact page url to be called then it automatically underneath of contact layout component.

You may have question after looking at the above code. 

**What is the use of `<tez-slot>`?**

`tez-slot` is used to load the respective page component, in our case `contact.vue`.
