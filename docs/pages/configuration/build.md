# Build Option
The most basic config file look like this:

```js
export default defineTezConfig({
    build: {
        inLineJs: false,
        inLinCss: false,
        bundleCss: false,
        minifyHtml: false
    }
})
```

### build.inLineJs
#### Type: Boolean
#### Default: true

When build, it will inlined the referenced component code of the page and necessary dependencies in index.html.
<br />

* * *

### build.inLinCss
#### Type: Boolean
#### Default: true

This will convert all css files, and include it as inline css in index.html.

<br />

* * *

### build.bundleCss
#### Type: Boolean
#### Default: true

This will bundle all referenced css of the page and creates a `bundle.css` in the respective page directory as well as reference it to the page.

<br />

* * *

### build.minifyHtml
#### Type: Boolean
#### Default: true

This will minify each generated html page based upon route.
