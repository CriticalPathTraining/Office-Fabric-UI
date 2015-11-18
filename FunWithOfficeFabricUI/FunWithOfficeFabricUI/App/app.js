'use strict';

var crmApp = angular.module("myApp", ['ngRoute']);

crmApp.config(function ($routeProvider) {

  $routeProvider.when("/", {
    templateUrl: 'views/home.html', controller: "homeController"
  }).when("/gridSystem", {
    templateUrl: 'views/gridSystem.html', controller: "gridSystemController"
  }).when("/icons", {
    templateUrl: 'views/icons.html', controller: "iconsController"
  }).when("/inputComponents", {
      templateUrl: 'views/inputComponents.html', controller: "inputComponentsController"
  }).when("/list", {
      templateUrl: 'views/list.html', controller: "listController"
  }).when("/personaCard", {
      templateUrl: 'views/personaCard.html', controller: "personaCardController"
  }).otherwise({
    redirectTo: "/"
  });


});
