angular.module('boursePlanningApp')
  .factory('planningService', function ($q, $http, $log, config, Upload) {

    var sendPlanningByMail = function (planning) {

      var deferred = $q.defer();

      $http.post(config.bourseBackendURL + "/planning/send/" + planning.id, {})
        .success(function () {
          $log.info("Mail sent for planning " + planning.id);
          deferred.resolve();
        })
        .error(function (response) {
          $log.error("Error while trying to send the mail. " + response);
        });

      return deferred.promise;

    };

    var uploadPlanning = function (file) {

      var deferred = $q.defer();

      Upload.upload({
        url: config.bourseBackendURL + '/planning/upload',
        data: {file: file}
      }).then(function (resp) {

        deferred.resolve(resp.data);

      }, function (resp) {
        $log.error('Error status: ' + resp.status);

        deferred.reject();
      }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        $log.info('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });

      return deferred.promise;
    };

    return {
      sendPlanningByMail : sendPlanningByMail,
      uploadPlanning: uploadPlanning
    }

  });
