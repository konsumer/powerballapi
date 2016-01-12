import powerball from 'powerball'
import express from 'express'
const api = express.Router()
export default api

var winner_cache
var freq_cache
function update_cache () {
  powerball.numbers()
    .then(winners => {
      winner_cache = winners
      freq_cache = powerball.frequencies(winner_cache)
    })
}
update_cache()
setInterval(update_cache, 21600000)

api.get('/balls', (req, res) => {
  res.json(powerball.balls(new Date(req.query.date) || new Date()))
})

api.get('/numbers', (req, res) => {
  res.json(winner_cache)
})

api.get('/frequencies', (req, res) => {
  res.json(freq_cache)
})

api.get('/predict', (req, res) => {
  res.json(powerball.predict(freq_cache.white, freq_cache.red, new Date(req.query.date) || new Date()))
})

api.post('/payout', (req, res) => {
  if (!req.body.pick) {
    res.sendStatus(500)
    return res.send('You must set `pick`.')
  }
  const winner = winner_cache.slice().pop()
  res.json(powerball.payout(req.body.pick, winner, req.body.powerplay || false))
})
