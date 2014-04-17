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
  $routeProvider.when('/', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/team', {
    templateUrl: 'partials/team-list.html',
    controller: 'TeamListController'
  });
  $routeProvider.when('/team/:id', {
    templateUrl: 'partials/team-detail.html',
    controller: 'TeamDetailController'
  });
  //$routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
// config(['$locationProvider', function($locationProvider) {
//   $locationProvider.html5Mode(true);
// }]);
