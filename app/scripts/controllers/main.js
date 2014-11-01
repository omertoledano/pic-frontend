'use strict';

/**
 * @ngdoc function
 * @name picFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the picFrontendApp
 */
angular.module('picFrontendApp')
  .controller('MainCtrl', function ($scope, $http, Facebook) {
        $scope.token = '-1';
        function getNextPic() {
            $http.get('http://localhost:5000/api/v1/images/random', {
              params: {user_token: $scope.token}
            })
                .success(function (data) {
                    $scope.image = data;
                });
        }

        getNextPic();
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
                {'op': res, 'user_token': $scope.token}).success(function(){
                    getNextPic();
                });
        }

      function login(){
        Facebook.login(function(response){
          if(response.status == 'connected') {
            $scope.loggedIn = true;
          }
        });
      }

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        $scope.loggedIn = response.status === 'connected';
      });
    };

    $scope.loggedIn = true;

    $scope.$watch(function() {
      return Facebook.isReady();
    }, function() {
      $scope.getLoginStatus();
    });

    $scope.$watch(function(){
      return $scope.loggedIn;
    }, function(){
      Facebook.api('/me', function(response){
        $scope.user = response.id;
        $http.post('http://localhost:5000/api/v1/fb_user_token', {
          'fb_user_id': $scope.user
        }).success(function(resp){
          $scope.token = resp.token;
        });
      });
    });

      $('#facebook-login').click(login);
  });
