import {defineTezConfig } from "@tezjs/vite"

export default defineTezConfig({
    client:{
        imports:['/@/assets/index.css'],
        loaderImage:'/images/loader.gif'
    },
    strapi: {
        apiUri: process.env.HOST ? `http://${process.env.HOST}:1337` : `http://localhost:1337`
    }
})