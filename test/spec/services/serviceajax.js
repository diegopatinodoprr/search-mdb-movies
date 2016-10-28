'use strict';

describe('Service: serviceajax', function () {

  // load the service's module
  beforeEach(module('cineAngularApp'));

  // instantiate service
  var serviceajax;
  beforeEach(inject(function (_serviceajax_) {
    serviceajax = _serviceajax_;
  }));

  it('should do something', function () {
    expect(!!serviceajax).toBe(true);
  });

});
