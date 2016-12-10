'use strict';

angular.module('boursePlanningApp')
  .factory('authService', function ($q, $http, $log, config, $location) {

    var isAuthenticated = function () {

      var deferred = $q.defer();

      $http.get(config.bourseBackendURL + '/auth-checker')
        .success(function (result) {
          $log.info(result);
          deferred.resolve(result);
        })
        .error(function (result) {
          $log.error(result);
          $location.path('/login');
          deferred.reject(result);
        });

      return deferred.promise;
    };

    var login = function (username, password) {

      var deferred = $q.defer();

      $http({
        url: config.bourseBackendURL + '/login',
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password)
      })
      .success(function (result) {
        $log.info(result);
        deferred.resolve(result);
      })
      .error(function (result) {
        $log.error(result);
        deferred.reject(result);
      });

      return deferred.promise;
    };

    return {
      isAuthenticated: isAuthenticated,
      login: login
    };
  });
