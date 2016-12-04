'use strict';

angular.module('boursePlanningApp')
  .controller('EmployeeCtrl', function ($scope, $http, config, $log, $location) {

    $scope.employees = [];

    $http.get(config.bourseBackendURL + '/employee')
      .success(function (result) {

        $scope.employees = result;

        $log.info(result);
      })
      .error(function (result) {
        $log.error(result);
      });

  });
