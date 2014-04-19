'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('Authentic Annenberg', function() {

  browser.get('index.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#/');
    });


    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Cover/);
    });

  });


  describe('content', function() {

    beforeEach(function() {
      browser.get('index.html#/content');
    });


    it('should render content list when user navigates to /content', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Contents/);
    });

  });


  describe('team', function() {

    beforeEach(function() {
      browser.get('index.html#/team');
    });


    it('should render team list when user navigates to /team', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Team/);
    });

  });


});
