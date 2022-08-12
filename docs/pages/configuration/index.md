## Tez Config

When you try to  running tez dev or tez build command from cmd , Tez will automatically try to resolve a config file named  tez.config.ts from project root.

The most basic config file is looks like this.  

```js
export default{  
    // config options   
}  
```

The another option for tez.config.ts files is looks like   

```js
export default defineTezConfig({  
    // config options  
})  
```

**Conditional Config**  
If the config needs to conditionally render things based on command(dev,build).   

```js
export default defineTezConfig(({ command, mode, ssrBuild }) => {
  if (command === 'dev') {  
    return {  
      // dev specific config  
    }  
  } else {  
    // command === 'build'  
    return {  
      // build specific config  
    }  
  }  
})  
```

**Async Config**

If during configuration you need to call async function. It can export a async function instead  

```js
export default defineTezConfig(async ({ command, mode }) => {  
  const value = await asyncFunction()  
  return {  
    // tez config  
  }  
})    
```
