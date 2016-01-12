import {getData} from '../utils'

export default function winners_controller ($scope, $http) {
  $http.get('/api/numbers')
    .then(getData)
    .then(n => {
      $scope.winners = n
    })
}
