'use strict';

/**
 * @ngdoc overview
 * @name picFrontendApp
 * @description
 * # picFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('picFrontendApp', [
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
