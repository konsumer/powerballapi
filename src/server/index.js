import express from 'express'
import cors from 'cors'
import epromise from 'express-promise'
import powerball from 'powerball'
import browserify from 'browserify-middleware'

const app = express()

app.use(cors())
app.use(epromise())
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

const port = process.env.port || 8000
app.listen(port, () => {
  console.log('Running on http://localhost:' + port)
})
