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
  .config(function ($httpProvider, $routeProvider) {

    //Sends cookies with requests
    $httpProvider.defaults.withCredentials = true;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          auth: function (authService) {
            return authService.isAuthenticated();
          }
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/employees', {
        templateUrl: 'views/employees.html',
        controller: 'EmployeeCtrl',
        controllerAs: 'employee',
        resolve: {
          auth: function (authService) {
            return authService.isAuthenticated();
          }
        }
      })
      .when('/employee/add', {
        templateUrl: 'views/employee_add.html',
        controller: 'EmployeeAddCtrl',
        controllerAs: 'employeeAdd',
        resolve: {
          auth: function (authService) {
            return authService.isAuthenticated();
          }
        }
      })
      .when('/employee/update/:id', {
        templateUrl: 'views/employee_edit.html',
        controller: 'EmployeeEditCtrl',
        controllerAs: 'employeeEdit',
        resolve: {
          auth: function (authService) {
            return authService.isAuthenticated();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
