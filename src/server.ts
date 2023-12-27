import app from './app'
import config from './config'
import database from './utils/database'

const run = async () => {
  try {
    await database()
    app.listen(config.port, () => {
      console.log(`Server is running at ${config.port} `)
    })
  } catch (error) {
    console.log('Error: ', error)
  }
}

run()
