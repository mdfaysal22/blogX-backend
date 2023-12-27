import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/api/v2', router)

export default app
