

module.exports = {  
    strapi: { 
        version:4,
        siteUrl:"http://localhost:3000",
        apiUri: "http://localhost:1337",  
        robots:{
            environmentName:"Dev"
        }, 
        optimization: {
            sourcePagination:true,
        }
    } 
}
                   