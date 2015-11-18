'use strict';

(function () {

  var app = angular.module('myApp');

  app.controller('homeController', homeController );

  function homeController($scope, $location, wingtipCrmService) {
    wingtipCrmService.getCustomers().success(function (data) {
      $scope.customers = data.d.results;
      $scope.deleteCustomer = function (id) {
        wingtipCrmService.deleteCustomer(id).success(function (data) {
          $scope.$apply();
          $location.path("/");
        });
      }
    });
  }

})();