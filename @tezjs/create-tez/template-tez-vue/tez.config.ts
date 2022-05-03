import { TezConfig } from "@tezjs/types"
export const TEZ_CONFIG:TezConfig = {  
    pages:[
        {
        url:'/',
        components:[
            {
                name:"home",
                data:[
                    "Load on-demand data",
                    "inbuilt sitemap generation",
                    "auto generate robots.txt",
                    "PWA Friendly"
                ],
                
            }
        ],
        seo:{"title":"Tez:Home Page"},
    }
]
}