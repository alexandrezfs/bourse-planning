'use strict';

angular.module('boursePlanningApp')
  .controller('LoginCtrl', function ($scope, $location, authService) {

    $scope.submitLogin = function (username, password) {

      authService.login(username, password)
        .then(function () {
          console.log('login success');
          $location.path('/');
        }, function () {
          console.log('error');
          $location.path('/login');
        });
    };

  });
