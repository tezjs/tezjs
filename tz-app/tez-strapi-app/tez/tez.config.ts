import { TezConfig } from "@tezjs/types"
export const TEZ_CONFIG:TezConfig = {  
    // express:{
    //     path:'api/index.js'
    // },
    // image:{
    //   enableWebPConversion:true
    // },
    // pwa:{
    //     "name": "ajay",
    //     "short_name": "Radixweb",
    //     "start_url": "/",
    //     "display": "standalone",
    //     "orientation": "portrait",
    //     "background_color": "#fff",
    //     "theme_color": "#fff",
    //     "icons": [
    //       {
    //         "src": "icons/icon-72x72.png",
    //         "sizes": "72x72",
    //         "type": "image/png"
    //       }
    //     ]
    //   },
      
    // strapi: { 
    //     version:4,
    //     siteUrl:process.env.VITE_SITE_URL,
    //     apiUri: process.env.VITE_API_URL,  
    //     robots:{
    //         environmentName:process.env.ROBOTS_ENVIRONMENT_NAME
    //     }, 
    //     optimization: {
    //         sourcePagination:true,
    //     }
    // }, 
    pages:[{
      url:'/',
      components:[
          {
              name:"home",
              data:[
                  "Load on-demand data",
                  "inbuilt sitemap generation",
                  "auto generate robots.txt",
                  "PWA Friendly"
              ]
          }
      ],
      seo:{"title":"Tez:Home Page"}
  },
      {
        redirectRoutes:[{
          from:"/abc",
          statusCode:200
        }],
        sitemap:{
          priority:1
        },
          url:'/custom-page',
          seo:{"title":"My Personal Strapi Blog","canonical":"http://localhost:3000/","metaTag":{"name":{"description":"My Personal Strapi Blog"}}},
          components:[
            {
              name:'header',
            },
            {
              name:'canidate-home',
              data:{'t':"abc"}
            }
        ]
      }
  ]
} 

                   