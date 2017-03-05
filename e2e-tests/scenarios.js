'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /summary when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/summary");
  });


  describe('summary', function() {

    beforeEach(function() {
      browser.get('index.html#!/summary');
    });


    it('should render summary when user navigates to /summary', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('experience', function() {

    beforeEach(function() {
      browser.get('index.html#!/experience');
    });


    it('should render experience when user navigates to /experience', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
