'use strict'

describe('Controller: BModalController', function () {

  // load the controller's module
  beforeEach(module('seamlessApp'))

  var BModalController, scope

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new()
    BModalController = $controller('BModalController', {
      $scope: scope
    })
  }))

  it('should ...', function () {
    expect(1).toEqual(1)
  })
})
