import { createTezServer } from '../src/domain/create-tez-server'
import {cac } from 'cac'
const cli = cac('tez')
cli.command('[root]', 'start dev server').option('--port <port>',`[number] specify port`)
.action(async (root:any,options:any)=>{
  console.log(root)
  console.log(options)
  createTezServer().then(({ app }) =>
  app.listen(3000, () => {
    console.log('http://localhost:3000')
  })
  )
})
cli.parse();