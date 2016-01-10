export default function check_controller ($scope, powerball) {
  powerball.numbers(1)
    .then(n => {
      $scope.winner = n[0]
    })

  $scope.powerplay = false
  $scope.setPowerPlay = () => {
    $scope.powerplay = !$scope.powerplay
  }

  $scope.winnings = 0
}
