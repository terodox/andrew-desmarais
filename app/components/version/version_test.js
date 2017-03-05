'use strict';

describe('andrewDesmaraisApp.version module', function() {
  beforeEach(module('andrewDesmaraisApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0');
    }));
  });
});
