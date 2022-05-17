import { createTezServer } from './create-tez-server'
import { getPort } from 'get-port-please'
import { commonContainer } from '@tezjs/common';
export function tzServer(){
  createTezServer().then(async ({ app }) =>{
    const port = await getPort({ports:[commonContainer.buildOptions.port,...Array(50).fill(3001).map((fillValue, index) => fillValue + index)]});
    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    })
  })
}