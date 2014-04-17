'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('authAnn.services', ['ngResource']).
value('version', '0.1').
factory('Team', ['$resource',
  function($resource){
    return $resource('team/:id.json', {}, {
      query: {method:'GET', params:{id:'team'}, isArray:true}
    });
  }
  ]
);
