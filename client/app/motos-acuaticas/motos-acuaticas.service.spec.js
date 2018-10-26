'use strict';

describe('Service: motosAcuaticas', function () {

  // load the service's module
  beforeEach(module('jetSkyApp'));

  // instantiate service
  var motosAcuaticas;
  beforeEach(inject(function (_motosAcuaticas_) {
    motosAcuaticas = _motosAcuaticas_;
  }));

  it('should do something', function () {
    expect(!!motosAcuaticas).to.be.true;
  });

});
