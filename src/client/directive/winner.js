import winner_template from '../template/winner.html'

export default function board_directive ($interval) {
  function link ($scope, $element, $attrs) {
  }

  return {
    scope: {
      winner: '='
    },
    restrict: 'E',
    template: winner_template,
    link: link
  }
}
