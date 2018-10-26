'use strict';

describe('Component: PlanesUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('jetSkyApp'));

  var PlanesUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PlanesUpdateComponent = $componentController('planes-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
