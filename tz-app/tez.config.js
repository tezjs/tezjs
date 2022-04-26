module.exports = {  
    express:{
        path:'api/index.js'
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
                   