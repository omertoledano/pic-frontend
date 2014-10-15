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
        $('#dont-like').click(dontLikePic);
        $('#like').click(likePic);
        function dontLikePic(){
            postResult('dont_like');
        }

        function likePic(){
            postResult('like');
        }

        function postResult(res){
            $http.post('http://localhost:5000/api/v1/image/' + $scope.image.id + '/like',
                {'op': res}).success(function(){
                    console.log('success posting')
                });
        }
  });
