'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('authAnn.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

  describe('Team', function() {
  	it('should return a json resource', inject(function(Team) {
  		expect(Team).toBeDefined();
  	}))
  })

  describe('Projects', function() {
  	it('should return a json resource', inject(function(Projects) {
  		expect(Projects).toBeDefined();
  	}))
  });

});
