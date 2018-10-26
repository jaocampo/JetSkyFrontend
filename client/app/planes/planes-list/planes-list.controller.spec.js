'use strict';

describe('Component: PlanesListComponent', function () {

  // load the controller's module
  beforeEach(module('jetSkyApp'));

  var PlanesListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PlanesListComponent = $componentController('planes-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
