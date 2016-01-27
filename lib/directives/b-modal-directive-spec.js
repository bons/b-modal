'use strict';

describe('Directive: bModal', function () {

  // load the directive's module
  beforeEach(module('bModal'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<b-modal></b-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bModal directive');
  }));
});