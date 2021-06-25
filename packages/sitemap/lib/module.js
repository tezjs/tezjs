module.exports = async function (moduleOptions) {
    const nuxtInstance = this;
    
    nuxtInstance.nuxt.hook('generate:done', async () => {
        console.log('sitemap generator')
        console.log(nuxtInstance.sitemap)
        //await Promise.all(options.map((options) => generateSitemaps(options, globalCache, nuxtInstance)))
        
    })

}
module.exports.meta = require('../package.json')