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
  $routeProvider.when('/about-us', {templateUrl: 'partials/about.html'});
  $routeProvider.when('/content', {
    templateUrl: 'partials/project-list.html',
    controller: 'ProjectListController'
  });
  $routeProvider.when('/content/:id', {
    templateUrl: 'partials/project-detail.html',
    controller: 'ProjectDetailController'
  });
  $routeProvider.when('/team', {
    templateUrl: 'partials/team-list.html',
    controller: 'TeamListController'
  });
  $routeProvider.when('/team/:id', {
    templateUrl: 'partials/team-detail.html',
    controller: 'TeamDetailController'
  });

  $routeProvider.when('/fbtest', {
    templateUrl: 'partials/test.html',
    controller: 'FBController'
  });
  //$routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
// config(['$locationProvider', function($locationProvider) {
//   $locationProvider.html5Mode(true);
// }]);
