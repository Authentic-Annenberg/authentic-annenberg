'use strict';


// Declare app level module which depends on filters, and services
angular.module('authAnn', [
  'ngRoute',
  'authAnn.filters',
  'authAnn.services',
  'authAnn.directives',
  'authAnn.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/team', {templateUrl: 'partials/team.html', controller: 'TeamController'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
