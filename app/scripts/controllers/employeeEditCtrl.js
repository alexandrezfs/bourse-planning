'use strict';

angular.module('boursePlanningApp')
  .controller('EmployeeEditCtrl', function ($scope, $http, $log, $location, config, $routeParams, employeeService) {

    $scope.employee = {};

    employeeService.getEmployee($routeParams.id)
      .then(function (employee) {

        $scope.employee = employee;
    });

    $scope.deleteEmployee = function (employee) {

      $http.delete(config.bourseBackendURL + '/employee/' + employee.id)
        .success(function (result) {

          $location.path('/employees');

          $log.info(result);
        })
        .error(function (result) {

          $log.error(result);
        });
    };

    $scope.updateEmployee = function (employee) {

      employeeService.updateEmployee(employee)
        .then(function () {

          $location.path('/employees');
      });
    };

  });
