'use strict';

angular.module('boursePlanningApp')
  .controller('EmployeeAddCtrl', function ($scope, $location, employeeService) {

    $scope.createEmployee = function (employee) {

      employeeService.createEmployee(employee)
        .then(function () {
          $location.path('/employees');
        });
    };

  });
