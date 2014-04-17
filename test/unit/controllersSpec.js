'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('authAnn.controllers'));

  it('should ....', inject(function($controller) {
    var teamController = $controller('TeamController');
    expect(teamController).toBeDefined();
  }));
  // it('should ....', inject(function  ($controller) {
  //   var staticController = $controller('StaticController');
  //   expect(staticController).toBeDefined();
  // }));

});
