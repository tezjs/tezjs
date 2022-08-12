# Deployment Options

While using this deployment option, if there is a need to auto generate the configuration of respective hosting provider which enable the recommended OWASP practices and other important guideline in the configuration file .

## deployment.firebase

Here is the basic config file for using the `deployment.firebase` in  `tez.config.ts`

- Type: boolean
- Default: false

```
import {defineTezConfig } from "@tezjs/vite"

export default defineTezConfig({
    deployment: {
        firebase: true
    }
})
```
The above code is for to generate the firebase.json file with necessary configurations.
