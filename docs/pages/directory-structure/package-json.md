## package.json file  

package.json file contains all the dependencies and scripts required for you application.

Here is the low level `package.json` which you will get in every boilerplate template.

```json
{
  "name": "tez-frontend",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "tez dev",
    "build": "tez build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tezjs/vue": "0.0.72"
  },
  "devDependencies": {
    "@tezjs/cli": "0.0.72",
    "@tezjs/route": "0.0.72",
  }
}

```
Let's understand the use of `dependencies` and `devDependencies` referenced packages.

`@tezjs/vue` : This package is used on client side for preparing the UI based upon the created component.
`@tezjs/cli` : This package is used to run the project in development mode as well as build the project. This package code won't be bundled in the client side code.
`@tezjs/route` : This package is used to auto generate the routes based upon the created components in the pages folder. This package code won't be bundled in the client side code.
