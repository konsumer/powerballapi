export default function blankOnFocus_directive () {
  return {
    restrict: 'A',
    link: function ($scope, element) {
      element.on('focus', function (e) {
        element.val('')
      })
    }
  }
}
