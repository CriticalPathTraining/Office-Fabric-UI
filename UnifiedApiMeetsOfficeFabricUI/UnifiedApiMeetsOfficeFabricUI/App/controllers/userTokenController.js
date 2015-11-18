'use strict';

var app = angular.module('myApp')

app.controller('userTokenController', ['$scope', 'adalAuthenticationService', '$location', userTokenController]);

function userTokenController($scope, adalService, $location) {

  // create array to track claims for logged-on user
  $scope.claims = [];

  // add claims for id_token into claims array
  for (var property in adalService.userInfo.profile) {
    if (adalService.userInfo.profile.hasOwnProperty(property)) {
      $scope.claims.push({
        key: property,
        value: adalService.userInfo.profile[property],
      });
    }
  }

}