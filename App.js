(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/view1', {
           templateUrl: 'view/view1.html',
		   controller: 'view1Ctrl'
      })
      .when('/view2', {
           templateUrl: 'view/view2.html'
      })
	  .when('/view3', {
		  templateUrl: 'view/view3.html',
		  controller: 'view3Ctrl'
	  })
	  .when('/view4', {
		  templateUrl: 'view/view4.html'
	  })
      .otherwise({redirectTo : 'view1'});
  });

}());