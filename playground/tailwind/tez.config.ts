import {defineTezConfig } from "@tezjs/vite"

export default defineTezConfig({
    client:{
        imports:['/@/assets/index.css']
    },
pages:[{
    url:'/',
    components:[{
        name:'home'
    }]
}]
})