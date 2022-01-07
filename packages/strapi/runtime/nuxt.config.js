const tez = require('./tez.config');
export default {
    target: 'static',

    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        [require('../')]  
    ],
    tez: tez   
}    
   