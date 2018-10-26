'use strict';

describe('Component: AlquileresComponent', function () {

  // load the controller's module
  beforeEach(module('jetSkyApp'));

  var AlquileresComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AlquileresComponent = $componentController('alquileres', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
