'use strict';

(function () {

  var app = angular.module('myApp');

  app.controller('viewController', viewController);

  function viewController($scope, $routeParams, $location, wingtipCrmService) {
    var id = $routeParams.id;
    wingtipCrmService.getCustomer(id).success(function (data) {
      $scope.customer = data.d;


      $scope.editCustomer = function () {
        $location.path("/edit/" + id);
      }

      $scope.cancel = function () {
        $location.path("/");
      }
    });

  }

})();