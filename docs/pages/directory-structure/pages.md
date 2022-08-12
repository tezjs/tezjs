## pages Directory  

Tezjs provides file-base routing to automatically create whole application rotues. 
When we talk about url routing then there are many use cases may arise, like
- I wish to create this `/` url page.
- I wish to create `/sign-in` url page.
- I wish to create `/users` and `users/bharat` url page, But one interesting thing is `users/bharat` is not the static page, this is dynamic page as the user-name would change on every user like in mentioned url `bharat` is the user name.
- I wish to show the product wise comments, so my url before forward slash prefix would be dynamic for example `iphone-se/comments`
- I wish to create three level dynamic url.

**Note** : Use **tez-link** component to navigate between your project pages  

**Example:**    
```html
<template>  
    <tez-link to="/">Home</tex-link>  
</template>  
```

**Usages**  

Pages are vue component  

**pages/index.vue**  

<template>     
    Home page  
</template>  

**Static Routes**

You can access any page under pages directory thorough it's file name.

**Example:**  

--|pages/  
----|sign-in.vue 

In above example you can access sign-in page through link localhost:3000/sign-in


**Dynamic Routes**  
If you want to add page with dynamic routes then add a uderscore( _ ) before your file name.  

**Example:**  

--|pages/  
----|_username.vue  

Here you can access any user's page with it's name on link **localhost:3000/username**  

You can also put dynamic things on sub directory  

**Example:**  

--|pages/  
----|user-profile.vue  
------|_username.vue   

In above example you can access username page on basis of username on link **localhost:3000/user-profile/username**  


If you want to make directory dynamic then also add underscore ( _ ) before directory name.  

**Example:**  

--|pages/  
----|_product-name.vue  
------|comments.vue  

In above example if you want to make same comment page for different products. For that we have add underscore ( _ )
before produc-name which which will take product-name dynamic and show  data accordingly in comments  

You can access comments on link **localhost:3000/productname/comments**  

Now if you want some something like nested things like if you wnat product details on while user cliks on paticular product from products page in such scenario you can maintain things as below.  

 
**Example:**  

--|pages/  
----|products/  
------|_product-name.vue  
----------|index.vue  
------|index.vue  

In above example you can access product-details page through link **localhost:3000/products/productname**  





