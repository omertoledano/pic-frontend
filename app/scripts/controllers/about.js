'use strict';

/**
 * @ngdoc function
 * @name picFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the picFrontendApp
 */
angular.module('picFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
