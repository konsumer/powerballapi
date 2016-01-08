export default function moveNextOnMaxlength_directive () {
  return {
    restrict: 'A',
    link: function ($scope, element) {
      element.on('input', function (e) {
        if (element.val().length === Number(element.attr('maxlength'))) {
          var $nextElement = element.next()
          if ($nextElement.length) {
            $nextElement[0].focus()
          }
        }
      })
    }
  }
}
