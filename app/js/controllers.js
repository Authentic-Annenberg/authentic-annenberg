'use strict';

/* Controllers */

var AAControllers = angular.module('authAnn.controllers', []);
AAControllers.controller('TeamListController',
  ['$scope', 'Team',
    function($scope, Team) {
      $scope.team = Team.query();
    }
  ]
);

AAControllers.controller('TeamDetailController',
  ['$scope', '$routeParams', 'Team',
    function($scope, $routeParams, Team) {
      $scope.team = Team.get({id: $routeParams.id},
        function(team){
          $scope.mainImageUrl = team.images[0];
        });

      $scope.setImage = function(mainImageUrl) {
        $scope.mainImageUrl = imageUrl;
      };
    }
  ]
);