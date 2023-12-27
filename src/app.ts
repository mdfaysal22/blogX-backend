import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './middlewares/globalErrorhandler'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to BlogX server')
})

app.use('/api/v2', router)

app.use(globalErrorHandler)

export default app
