'use strict';

describe('Service: tipoClientes', function () {

  // load the service's module
  beforeEach(module('jetSkyApp'));

  // instantiate service
  var tipoClientes;
  beforeEach(inject(function (_tipoClientes_) {
    tipoClientes = _tipoClientes_;
  }));

  it('should do something', function () {
    expect(!!tipoClientes).to.be.true;
  });

});
