'use strict';

var app = angular.module('myApp');

app.controller('contactsController', ['$scope', 'unifiedApiService', contactsController]);

function contactsController($scope, unifiedApiService) {

  unifiedApiService.getContacts().success(function (data) {
    $scope.contacts = data.value;
  }).
  error(function(data, status, headers, config) {
    alert("Error getting contacts");
  });


}