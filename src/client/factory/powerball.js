import {getData} from '../utils'

export default function powerball_factory ($http) {
  var powerball = {}

  powerball.numbers = function (count) {
    return $http.get(count ? `/numbers/${count}` : '/numbers').then(getData)
  }

  powerball.frequencies = function () {
    return $http.get('/frequencies').then(getData)
  }

  return powerball
}
