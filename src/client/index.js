import angular from 'angular'
import 'angular-ui-router'

import winners_controller from './controller/winners'
import winners_template from './template/winners.html'
import board_directive from './directive/board'
import powerball_factory from './factory/powerball'
import moveNextOnMaxlength_directive from './directive/moveNextOnMaxlength'
import zeroPad_filter from './filter/zeroPad'

export default angular.module('app', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/winners')
    $stateProvider
      .state('winners', {
        url: '/winners',
        template: winners_template,
        controller: winners_controller
      })
  })
  .factory('powerball', powerball_factory)
  .filter('zeroPad', zeroPad_filter)
  .directive('board', board_directive)
  .directive('moveNextOnMaxlength', moveNextOnMaxlength_directive)
