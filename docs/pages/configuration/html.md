# Html Head Options

This is to be used set some html meta on every generate page or favicon, etc.

## htmlMeta.head.preConnect
Before loading the actual website it will connect the site url which you have mentioned in the `preconnect` field.

- Type: `String` | `Number` | `string[]`

```
htmlMeta:{
        head:{
            preConnect:["https://d3kv2tw1u0hreu.cloudfront.net/"],
        }
}
```

## htmlMeta.head.preFetch
Before loading the actual website it will prefetch the data which you have mentioned in the `preFetch` field.

- Type: `String` | `Number` | `string[]`

```
htmlMeta:{
        head:{
            preFetch:["/template.json"],
        }
}
```

## htmlMeta.head.favicon
It will display the favicon icon when the site is load:

- Type: `String`

```
htmlMeta:{
        head:{
            favicon:'/favicon.ico',
        }
}
```
