import {getData} from '../utils'

export default function check_controller ($scope, $http) {
  $http.get('/api/numbers?count=1')
    .then(getData)
    .then(n => {
      $scope.winner = n[0]
    })

  $scope.powerplay = false
  $scope.setPowerPlay = () => {
    $scope.powerplay = !$scope.powerplay
  }

  $scope.winnings = 0

  $scope.onCheck = (payout) => {
    if (payout.pay === null && payout.red_match && payout.winning_white.length === 5){
      $scope.jackpot = true
    } else {
      $scope.jackpot = false
      $scope.payout = payout.pay
    }
  }
}
