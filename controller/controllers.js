(function() {

  "use strict";

  var App = angular.module("App.controllers", []);

  App.controller("MyCtrl1", ["$scope", function ($scope, UtilSrvc){
    $scope.aVariable = 'anExampleValueWithinScope';
    $scope.valueFromService = UtilSrvc.helloWorld("User");
  }]);

  App.controller("view1Ctrl", ["$scope", "notify", function($scope, notify){
     $scope.callNotify = function(msg) {
     notify.pushy(msg);
   };
  }]);
  App.controller("view2Ctrl", ["$scope", function($scope){
      // if you have many controllers, it's better to separate them into files
  }]);
  App.controller("view3Ctrl", ["$scope", "notify", function($scope, notify){
      var msgs = [];
	  $scope.callReceive = function(){
		  $scope.fruits = notify.receive();
	  }
  }]);
  App.controller("view4Ctrl", ["$scope", function($scope){
      // if you have many controllers, it's better to separate them into files
  }]);

}());