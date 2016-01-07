var express = require('express')
var powerball = require('powerball')
var cors = require('cors')

var app = express()

// let anyone access this data, cross-domain
app.use(cors())
// app.options('*', cors())

app.use(express.static('pub'))

app.get('/numbers/:start/:end', function (req, res) {
  powerball.numbers().then(res.send)
})

app.listen(process.env.port || 8000)