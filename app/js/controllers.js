'use strict';

/* Controllers */

angular.module('authAnn.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('HomeController', [function() {
  	
  }])
  .controller('TeamController', function($scope) {
  	$scope.members = [
    {'name': 'Kamol Treewatchararat',
     'photo': 'k.jpg',
     'bio': "Kamol is a software developer with a masters degree from University of Southern California."},
    {'name': 'Emma Chen',
     'photo': 'emma.jpg',
     'bio': 'Foodie. Violin player. Loves traveling. Loves cooking. Loves being a member in the Annenberg community!'},
    {'name': 'Andre Domenech',
     'photo': 'andre.jpg',
     'bio':'Andres Domenech hails from Ann Arbor, Michigan, where he studied Spanish and Latin American Studies at the University of Michigan.'},
    {'name': 'Jiyu Chen',
     'photo': 'jiyu.jpg',
     'bio':'Jiyu Chen is currently a second-year graduate student student in the Communication Management program.'},
    {'name': 'Carol Zhu',
     'photo':'carol.jpg',
     'bio':'Carol Zhu is a second-year graduate student in the Communication Management program at the Annenberg School'},
    {'name': 'Jan',
     'photo': 'jan.png',
     'bio': 'Jan Zari is a first year graduate student in the Master of' +
     ' Communication Management program at the Annenberg School'}
  ];
  });