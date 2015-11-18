/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\Scripts/jquery-2.1.4.js" />
/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\office-fabric-ui/script/Jquery.DatePicker.js" />
/// <reference path="C:\DevProjects\FunWithOfficeFabricUI\FunWithOfficeFabricUI\office-fabric-ui/script/Jquery.SearchBox.js" />


"use strict";

$(function () {

    console.log("initializing test page");

    $(".ms-DatePicker").DatePicker();
    $("#div2").SearchBox();

});