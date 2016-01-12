import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import browserify from 'browserify-middleware'
import api from './api'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/app.js', browserify(__dirname + '/../client/index.js'))
app.use(express.static('pub'))

app.use('/api', api)

const port = process.env.port || 8000
app.listen(port, () => {
  console.log('Running on http://localhost:' + port)
})
