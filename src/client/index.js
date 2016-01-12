import angular from 'angular'
import 'angular-ui-router'
import 'angular-animate'
import 'angular-material'

import winners_controller from './controller/winners'
import winners_template from './template/winners.html'

import check_controller from './controller/check'
import check_template from './template/check.html'

import board_directive from './directive/board'
import moveNextOnMaxlength_directive from './directive/moveNextOnMaxlength'
import blankOnFocus_directive from './directive/blankOnFocus'
import winner_directive from './directive/winner'

import zeroPad_filter from './filter/zeroPad'

export default angular.module('app', ['ui.router', 'ngMaterial'])
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/check')
    $stateProvider
      .state('winners', {
        url: '/winners',
        template: winners_template,
        controller: winners_controller
      })
      .state('check', {
        url: '/check',
        template: check_template,
        controller: check_controller
      })
  })
  .filter('zeroPad', zeroPad_filter)
  .directive('board', board_directive)
  .directive('winner', winner_directive)
  .directive('moveNextOnMaxlength', moveNextOnMaxlength_directive)
  .directive('blankOnFocus', blankOnFocus_directive)
