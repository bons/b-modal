'use strict';

describe('Service: bModal', function () {

  // load the service's module
  beforeEach(module('bModal'));

  // instantiate service
  var bModal;
  beforeEach(inject(function (_bModal_) {
    bModal = _bModal_;
  }));

  it('should do something', function () {
    expect(!!bModal).toBe(true);
  });
});