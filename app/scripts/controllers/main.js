'use strict';

/**
 * @ngdoc function
 * @name picFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the picFrontendApp
 */
angular.module('picFrontendApp')
  .controller('MainCtrl', function ($scope, $http) {
        $http.get('http://localhost:5000/api/v1/images/random')
            .success(function(data){
                $scope.image = data;
            });
  });
