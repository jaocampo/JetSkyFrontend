'use strict';

describe('Component: PlanesCreateComponent', function () {

  // load the controller's module
  beforeEach(module('jetSkyApp'));

  var PlanesCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PlanesCreateComponent = $componentController('planes-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
