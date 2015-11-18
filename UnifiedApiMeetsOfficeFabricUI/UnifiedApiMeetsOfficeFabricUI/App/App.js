'use strict';

// !!! BEFORE YOU RUN THIS SAMPLE APP !!!
// --------------------------------------

// update the GUID for the client_id variable 
// in the initializeADALSettings function
var client_id = "f97dca60-3f51-4e78-a9de-c56aaf7cd3a7";


(function () {

  var app = angular.module("myApp", ['ngRoute', 'AdalAngular']);

  app.filter('unsafe', function ($sce) {
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  });


  app.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', initializeApp]);


  function initializeApp($routeProvider, $httpProvider, adalProvider) {

    initializeADALSettings($httpProvider, adalProvider);

    initializeRouteMap($routeProvider);



  }

  function initializeADALSettings($httpProvider, adalProvider) {

    var endpoints = {
      "https://graph.microsoft.com/": "https://graph.microsoft.com/",
    };

    var adalProviderSettings = {
      tenant: 'common',
      clientId: client_id,
      extraQueryParameter: 'nux=1',
      endpoints: endpoints,
      cacheLocation: 'localStorage' // enable this for IE, as sessionStorage does not work for localhost.
    };

    adalProvider.init(adalProviderSettings, $httpProvider);
   
  }

  function initializeRouteMap($routeProvider) {

    // config app's route map
    $routeProvider
      .when("/",
           { templateUrl: 'App/views/home.html', controller: "homeController" })
     .when("/messages",
           { templateUrl: 'App/views/messages.html', controller: "messagesController", requireADLogin: true })
     .when("/message/:id",
           { templateUrl: 'App/views/message.html', controller: "messageController", requireADLogin: true })
      .when("/users",
           { templateUrl: 'App/views/users.html', controller: "usersController", requireADLogin: true })
      .when("/groups",
           { templateUrl: 'App/views/groups.html', controller: "groupsController", requireADLogin: true })
      .when("/contacts",
           { templateUrl: 'App/views/contacts.html', controller: "contactsController", requireADLogin: true })
      .when("/userToken",
           { templateUrl: 'App/views/userToken.html', controller: "userTokenController", requireADLogin: true })
      .otherwise({ redirectTo: "/" });
  }

})();