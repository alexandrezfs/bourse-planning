'use strict';


angular
  .module('boursePlanningApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload',
    'angularMoment',
    'ui-notification',
    'angular-loading-bar',
    'ngConfirm'
  ])
  .run(function (amMoment) {
    amMoment.changeLocale('fr');
  })
  .constant('config', {
    'bourseBackendURL': 'http://services.librairielabourse.fr/bourse-services'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeeCtrl',
        controllerAs: 'employee'
      })
      .when('/employee/add', {
        templateUrl: 'views/employee_add.html',
        controller: 'EmployeeAddCtrl',
        controllerAs: 'employeeAdd'
      })
      .when('/employee/update/:id', {
        templateUrl: 'views/employee_edit.html',
        controller: 'EmployeeEditCtrl',
        controllerAs: 'employeeEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
