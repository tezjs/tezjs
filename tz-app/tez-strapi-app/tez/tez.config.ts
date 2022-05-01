import { TezConfig } from "@tezjs/types"
export const TEZ_CONFIG:TezConfig = {  
    express:{
        path:'api/index.js'
    },
    image:{
      enableWebPConversion:true
    },
    pwa:{
        "name": "ajay",
        "short_name": "Radixweb",
        "start_url": "/",
        "display": "standalone",
        "orientation": "portrait",
        "background_color": "#fff",
        "theme_color": "#fff",
        "icons": [
          {
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          }
        ]
      },
      
    strapi: { 
        version:4,
        siteUrl:process.env.VITE_SITE_URL,
        apiUri: process.env.VITE_API_URL,  
        robots:{
            environmentName:process.env.ROBOTS_ENVIRONMENT_NAME
        }, 
        optimization: {
            sourcePagination:true,
        }
    } 
} 

                   