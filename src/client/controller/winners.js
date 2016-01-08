export default function winners_controller ($scope, powerball) {
  powerball.numbers(1)
    .then(n => {
      $scope.winners = n
    })
}
