'use strict';

angular.module('boursePlanningApp')
  .controller('LoginCtrl', function ($scope, $location, authService, Notification) {

    $scope.submitLogin = function (username, password) {

      authService.login(username, password)
        .then(function () {
          console.log('login success');
          $location.path('/');
        }, function () {
          console.log('error');
          Notification.error({message: 'Erreur de connexion.', positionX: 'center'});
        });
    };

  });
