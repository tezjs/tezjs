## pages Directory

Tezjs provides file-base routing to automatically create whole application rotues. 
When we talk about url routing then there are many use cases may arise, like

**1.**  **I wish to create this `/` url page.**

For that make index.vue file under pages directory.

- Here is folder structure for that.   
```
    --| pages/  
    -----| index.vue  
```
you can access above page on url **localhost:3000/** .  


**2.** **I wish to create `/sign-in` url page.**

For making a sing-in page, make a sing-in.vue file under pages directory.  

- here is folder structure to make sing-in page.
```
    --| pages/  
    -----| sign-in.vue  
```
you can access above page on url **localhost:3000/sign-in** .

**3.** **I wish to create /users and users/bharat url page, But one interesting thing is users/bharat is not the static page, this is dynamic page as the user-name would change on every user like in mentioned url bharat is the user name.**

To make such usecases first create one directory with name users and add one file under it 
which name will be **_user-name.vue** . make sure you add underscore befor username file. This
is simple way to add dynamic page in tezjs

- Here is folder structure to make dynamic username page.
```
    --| pages/  
    -----| user/   
    --------| _user-name.vue 
```
you can access above page on url **localhost:3000/user/anyusername**

**4.** **I wish to show the product wise comments, so my url before forward slash prefix would be dynamic for example `iphone-se/comments`.**

To make such usecases like to make common page for differnt products. 
  
- Here are steps to acchive above goal:  
    1. Add **_productname** directory under pages directory. Make sure you add uderscore before 
       directory name.
    2. Add **comments.vue** file under _productname directory.  

- here is folder structure to make dynamic directory with common page.  
  
```
    --| pages/  
    -----| _product-name/   
    -------- | commets.vue
```
you can access above page on url **localhost:3000/anyproductname/comments**


**5.** **I wish to create three level dynamic url.**

- In such usecases let's take an example you want some product page to show all products
when user clik on product you want to show that product's details with in product-details page dynamically.

- Here are steps to achive above things:  
     1. create a products directory.
     2. create **index.vue** file under **products** directory.
     3. create dynamic directory with name **_productname**
     4. create **index.vue** under __productname directory  

  
here is folder structure to make dynamic userdetails page with specific productname.
```
    --| pages/  
    -------|products/    
    -----------| _product-name/  
    ----------------| index.vue  
    -----------| index.vue
```

you can access above products-list on url **localhost:3000/products** and can access specific product-details page on url **localhost:3000/products/anyproductname**

**Note:**  Use **tez-link** component to navigate between your project pages  
<template>   
    <tez-link to="/">Home</tex-link>    
</template>    

**Note:** You can access all dynamic route's params with `$tezRoutes.params['yourparams']`
