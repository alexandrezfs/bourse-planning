'use strict';

angular.module('boursePlanningApp')
  .controller('MainCtrl', function (config, $scope, $http, $log, $location, moment, planningService, Notification) {

    $scope.extractedExcelData = null;
    $scope.mailSent = false;

    $scope.sendPlanningByMail = function (planning) {

      planningService.sendPlanningByMail(planning)
        .then(function () {
          $scope.mailSent = true;
          Notification.primary({message: 'Le mail a été envoyé avec succès !', positionX: 'center'});
        }, function () {
          Notification.error({
            message: 'L\'envoi du mail a échoué. Veuillez contacter un administrateur.',
            positionX: 'center'
          });
        });

    };

    // upload on file select or drop
    $scope.upload = function (file) {
      planningService.uploadPlanning(file)
        .then(function (data) {
          $scope.planning = data.planning;
          $scope.extractedExcelData = data.extractedExcelData;
        }, function () {
          Notification.error({
            message: 'Le téléchargement a échoué. Le planning n\'a pas été reconnu comme conforme.',
            positionX: 'center'
          });
        });
    };
  });
