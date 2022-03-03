import { createTezServer } from './src/domain/create-tez-server'

export default function tzServer(){
  createTezServer().then(({ app }) =>
    app.listen(3000, () => {
      console.log('http://localhost:3000')
    })
    )
}