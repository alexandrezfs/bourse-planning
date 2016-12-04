angular.module('boursePlanningApp')
  .factory('employeeService', function ($q, $http, $log, config, moment) {

    var createEmployee = function (employee) {

      var deferred = $q.defer();

      $http.post(config.bourseBackendURL + "/employee", employee)
        .success(function (result) {
          $log.info("Created employee with ID " + result);
          deferred.resolve();
        })
        .error(function (result) {
          $log.error(result);
          deferred.reject(result);
        });

      return deferred.promise;

    };

    var updateEmployee = function (employee) {

      var deferred = $q.defer();

      $http.put(config.bourseBackendURL + "/employee", employee)
        .success(function (result) {
          $log.info("Updated employee with ID " + result);
          deferred.resolve(result);
        })
        .error(function (result) {
          $log.error(result);
          deferred.reject(result);
        });

      return deferred.promise;

    };

    var getEmployee = function (id) {

      var deferred = $q.defer();

      $http.get(config.bourseBackendURL + '/employee/' + id)
        .success(function (employee) {
          $log.info("Get employee with ID " + id);

          if(employee.dateOfBirth) {
            employee.dateOfBirth = moment(employee.dateOfBirth).toDate();
          }

          deferred.resolve(employee);
        })
        .error(function (result) {
          $log.error(result);
          deferred.reject(result);
        });

      return deferred.promise;

    };

    return {
      createEmployee: createEmployee,
      updateEmployee: updateEmployee,
      getEmployee: getEmployee
    }

  });
