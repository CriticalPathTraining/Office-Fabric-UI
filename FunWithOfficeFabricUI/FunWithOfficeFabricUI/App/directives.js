/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\Scripts/angular.js" />
/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\office-fabric-ui/script/Jquery.DatePicker.js" />
/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\Scripts/jquery-2.1.4.js" />


'use strict';
console.log("directives.js loading...");

(function () {

  var app = angular.module('myApp')

  app.directive('datePicker', function () {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        console.log("Initializing date-picker directive");
        $(element).addClass("ms-DatePicker");
        $(element).DatePicker();
      }
    };
  });



})();