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
    'ngRoute', 'facebook'
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
  }).config(['FacebookProvider',
    function(FacebookProvider){
      var myAppId = '1488145908127671';
      FacebookProvider.init(myAppId);
    }
  ]);
