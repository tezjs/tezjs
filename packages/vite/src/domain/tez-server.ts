import { TezConfig } from '@tezjs/types'
import { createTezServer } from './create-tez-server'

export function tzServer(tezConfig?:TezConfig,rootPath?:string){
  createTezServer(tezConfig,rootPath).then(({ app }) =>{
    app.listen(3000, () => {
      console.log('http://localhost:3000')
    })
  })
}