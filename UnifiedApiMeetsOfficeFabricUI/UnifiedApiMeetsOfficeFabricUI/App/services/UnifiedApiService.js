'use strict';

(function () {

  var app = angular.module('myApp');

  app.factory("unifiedApiService", [ '$http', createServiceObject]);

  function createServiceObject($http) {
    // create service object
    var service = {};

    var apiRoot = "https://graph.microsoft.com/v1.0/";
    $http.defaults.useXDomain = true;

    // set default headers for $http service
    var config = {
      headers: {
        'Accept': 'application/json; odata.metadata=none',
      }
    };

 
    service.getMessages = function () {
      var restUrl = apiRoot + "me/messages/?$top=15";
      return $http.get(restUrl);
    };

    service.getMessage = function (objectId) {
      var restUrl = apiRoot + "me/messages/" + objectId;
      return $http.get(restUrl);
    }

    service.deleteMessage = function (objectId) {
      var restUrl = apiRoot + "me/messages/" + objectId;
      return $http.delete(restUrl);
    }


    service.sendMessage = function (message) {

      var restUrl = apiRoot + "me/sendmail";

      var newMessage = {
        'Message': {
          'Subject': message.Subject,
          'Importance': "Normal",
          'Body': {
            'ContentType': 'Text',
            'Content': message.Body
          },
          'ToRecipients': [{
            'EmailAddress': {
              'Name': '',
              'Address': message.To
            }
          }]
        }
      };

      return $http.post(restUrl, newMessage, config);
    };

    service.getCalendarEvents = function () {
      var restUrl = apiRoot + "me/calendarview/?startdatetime=2015-05-01&enddatetime=2015-07-01";
      return $http.get(restUrl);
    };

    service.getFiles = function () {
      var restUrl = apiRoot + "me/files/";
      return $http.get(restUrl);
    };

    service.getTenantDetails = function () {
      var restUrl = apiRoot + "myOrganization/tenantDetails/";
      return $http.get(restUrl);
    };

    service.getUsers = function () {
      var restUrl = apiRoot + "myOrganization/users/";
      return $http.get(restUrl);
    };

    service.getGroups = function () {
      var restUrl = apiRoot + "myOrganization/groups/";
      return $http.get(restUrl);
    };

    service.getContacts = function () {
      var restUrl = apiRoot + "me/contacts/";
      return $http.get(restUrl);
    };


    service.addGroup = function (groupName) {

      var restUrl = apiRoot + "myOrganization/groups/";

      var postData = {
        "@odata.type" : "#Microsoft.Graph.Group",
        "groupType": "Unified",
        "displayName": groupName,
        "mailNickname": groupName,
        "mailEnabled": "true",
        "securityEnabled": true
      }

      return $http.post(restUrl, postData);


    };

   
    // return service object to angular framework
    return service;
  }

})();

