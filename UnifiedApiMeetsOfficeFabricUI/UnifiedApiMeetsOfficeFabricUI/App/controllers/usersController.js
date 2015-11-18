'use strict';

var app = angular.module('myApp');

app.controller('usersController', ['$scope', 'unifiedApiService', usersController]);

function usersController($scope, unifiedApiService) {

  unifiedApiService.getUsers().success(function (data) {
    $scope.users = data.value;
  }).
  error(function(data, status, headers, config) {
    alert("Error getting users");
  });


}