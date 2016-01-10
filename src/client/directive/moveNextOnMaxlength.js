export default function moveNextOnMaxlength_directive () {
  return {
    restrict: 'A',
    link: function ($scope, element) {
      element.on('input', function (e) {
        if (element.val().length === Number(element.attr('maxlength'))) {
          var gn = new Function('', 'return ' + element.attr('move-next-on-maxlength'))
          var $nextElement = gn.bind(element)()
          if ($nextElement && $nextElement.length) {
            $nextElement[0].focus()
          }
        }
      })
    }
  }
}
