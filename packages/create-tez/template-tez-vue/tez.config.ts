import { TezConfig } from "@tezjs/types"
export const TEZ_CONFIG:TezConfig = {  
    pages:[
        {
        url:'/',
        components:[
            {
                name:"home",
                data:{
                    title:"Develop Blazing Fast Application with Tez",
                    info:"Take a glimpse of Core Web Vital friendly application having exemplary features  :",
                    features:[
                        "No code for SEO.",
                        "No code for PWA Integration.",
                        "No code for Image Optimization.",
                        "No code for Lazy loading.",
                        "No code for Sitemap.",
                        "No code for Page Routing.",
                        "Many more...."
                    ],
                    getStarted:"To get started, start adding pages in the tez.config.ts file."
                },
            }
        ],
        seo:{"title":"Welcome to Tez App"}
    }
]
}