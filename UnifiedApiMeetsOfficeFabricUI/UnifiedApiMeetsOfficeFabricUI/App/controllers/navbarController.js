'use strict';

(function () {

  var app = angular.module('myApp');

  app.controller('navbarController', ['$scope', 'adalAuthenticationService', '$location', navbarController]);

  function navbarController($scope, adalService, $location) {
   
    $scope.login = function () {
       adalService.login();
    };

    $scope.logout = function () {
      adalService.logOut();
    };

    $scope.$on("adal:loginSuccess", function () {
      // add code here to respond to successful user login event
    });

  }

})();
