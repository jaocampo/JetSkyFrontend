'use strict';

describe('Service: planes', function () {

  // load the service's module
  beforeEach(module('jetSkyApp'));

  // instantiate service
  var planes;
  beforeEach(inject(function (_planes_) {
    planes = _planes_;
  }));

  it('should do something', function () {
    expect(!!planes).to.be.true;
  });

});
