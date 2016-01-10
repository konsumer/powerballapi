import board_template from '../template/board.html'

export default function board_directive ($interval, powerball) {
  function link ($scope, $element, $attrs) {
    $scope.maxWhite = $scope.oldRules ? 59 : 69
    $scope.maxRed = $scope.oldRules ? 36 : 26

    $scope.numbers = [null, null, null, null, null, null]

    $element.on('keyup', function () {
      if ($scope.numbers.length === 6) {
        powerball.check($scope.numbers)
          .then(valids => {
            console.log(valids)
          })
      }
    })
  }

  return {
    scope: {
      numbers: '=',
      label: '@',
      oldRules: '='
    },
    restrict: 'E',
    template: board_template,
    link: link
  }
}
