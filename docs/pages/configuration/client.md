## Client Module

**imports Option**

`imports` propery is for used to import things which are used during whole application

**Example**

```js
export default defineTezConfig({  
    client:{  
        imports:['/@/assets/index.css']  
    },  
})  
```

**Note:** You can also add multiple things inside array after adding ( , ) end of one path  

**loaderImage Options**  

`loaderImage` is used for to first reference source of image tag untill the actual image to be loaded.   
```js
export default defineTezConfig({  
    client:{  
        loaderImage:"/images/loader.gif"  
    },  
})  
```
