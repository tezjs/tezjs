  var vite = require("@tezjs/vite")
  vite.tzServer();
// const { createServer } = require('vite')

// ;(async () => {
//   const server = await createServer({
//     // any valid user config options, plus `mode` and `configFile`
//     configFile: false,
//     root: __dirname,
//     server: {
//       port: 1337
//     }
//   })
//   console.log(server.middlewares)
//   server.use("/abc",function(t,y){
//       console.log(t);
//       console.log(y)
//   })
//   console.log(server)
//   await server.listen()

//   server.printUrls()
// })()