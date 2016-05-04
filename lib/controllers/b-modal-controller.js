'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ngAnnotations = require('ng-annotations');

var BModalController = (function () {
  function BModalController($scope, bModalFactory) {
    _classCallCheck(this, _BModalController);

    this.name = $scope.bModal;
    this.$scope = $scope;
    this.bModalFactory = bModalFactory;
  }

  _createClass(BModalController, [{
    key: 'hide',
    value: function hide() {
      this.bModalFactory.hide(this.name);
      this.$scope.$emit('bModal.hide.' + this.name);
    }
  }, {
    key: 'show',
    value: function show() {
      this.bModalFactory.show(this.name);
      this.$scope.$emit('bModal.show.' + this.name);
    }
  }, {
    key: 'canShow',
    value: function canShow() {
      return this.bModalFactory.canShow(this.name);
    }
  }, {
    key: 'avoidHide',
    value: function avoidHide(evt) {
      evt.stopPropagation();
    }
  }]);

  var _BModalController = BModalController;
  BModalController = (0, _ngAnnotations.inject)('$scope', 'bModalFactory')(BModalController) || BModalController;
  BModalController = (0, _ngAnnotations.controller)('bModalController')(BModalController) || BModalController;
  return BModalController;
})();

exports.BModalController = BModalController;