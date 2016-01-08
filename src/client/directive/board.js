import board_template from '../template/board.html'

export default function board_directive ($interval) {
  function link ($scope, $element, $attrs) {
    $scope.maxWhite = $scope.oldRules ? 59 : 69
    $scope.maxRed = $scope.oldRules ? 36 : 26
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
