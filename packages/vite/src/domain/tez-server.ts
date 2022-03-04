import { createTezServer } from './create-tez-server'

export function tzServer(){
  createTezServer().then(({ app }) =>
    app.listen(3000, () => {
      console.log('http://localhost:3000')
    })
    )
}