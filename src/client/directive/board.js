import {getData} from '../utils'
import board_template from '../template/board.html'

export default function board_directive ($interval, $http) {
  function link ($scope, $element, $attrs) {
    $scope.maxWhite = $scope.oldRules ? 59 : 69
    $scope.maxRed = $scope.oldRules ? 36 : 26

    $scope.numbers = $scope.numbers || [null, null, null, null, null, null]

    $element.on('keyup', function () {
      if ($scope.numbers.length === 6 && $scope.numbers.indexOf(null) === -1) {
        $http.post('/api/payout', {pick: $scope.numbers})
          .then(getData)
          .then(payout => {
            $scope.onCheck(payout)
          })
      }
    })
  }

  return {
    scope: {
      numbers: '=',
      label: '@',
      powerplay: '=',
      onCheck: '='
    },
    restrict: 'E',
    template: board_template,
    link: link
  }
}
