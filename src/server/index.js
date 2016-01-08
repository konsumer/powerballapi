import express from 'express'
import cors from 'cors'
import epromise from 'express-promise'
import bodyParser from 'body-parser'
import powerball from 'powerball'
import browserify from 'browserify-middleware'

const app = express()

app.use(cors())
app.use(epromise())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/app.js', browserify(__dirname + '/../client/index.js'))
app.use(express.static('pub'))

// update the numbers-cache every 6 hours
setInterval(() => {
  powerball.numbers()
}, 21600000)

app.get('/numbers', (req, res) => {
  res.json(powerball.numbers(new Date(0), new Date(), true))
})

app.get('/numbers/:count', (req, res) => {
  res.json(powerball.numbers(new Date(0), new Date(), true).then((nums) => {
    return nums.sort((a, b) => {
      return a.date > b.date
    }).slice(-1 * req.params.count)
  }))
})

app.get('/frequencies', (req, res) => {
  res.json(powerball.frequencies(new Date(0), new Date(), true))
})

app.post('/check', (req, res) => {
  var now = Date.now
  // look 1 week back
  res.json(powerball.check(req.body.numbers, new Date(now - 6.048e+8), new Date(now), true, true))
})

const port = process.env.port || 8000
app.listen(port, () => {
  console.log('Running on http://localhost:' + port)
})
