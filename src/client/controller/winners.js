export default function winners_controller ($scope, powerball) {
  powerball.numbers()
    .then(n => {
      $scope.winners = n
    })
}
