'use strict';

/**
 * @ngdoc function
 * @name picFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the picFrontendApp
 */
angular.module('picFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
