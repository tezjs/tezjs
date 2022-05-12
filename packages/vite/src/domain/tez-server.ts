import { TezConfig } from '@tezjs/types'
import { createTezServer } from './create-tez-server'
import { getRandomPort } from 'get-port-please'
export function tzServer(tezConfig?:TezConfig,rootPath?:string){
  createTezServer(tezConfig,rootPath).then(async ({ app }) =>{
    const port = await getRandomPort();
    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    })
  })
}