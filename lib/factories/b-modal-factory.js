'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ngAnnotations = require('ng-annotations');

var BModalFactory = (function () {
  function BModalFactory() {
    _classCallCheck(this, _BModalFactory);
  }

  _createDecoratedClass(BModalFactory, [{
    key: 'show',
    decorators: [_ngAnnotations.autobind],
    value: function show(id) {
      if (id === this.current) return;

      this.current = id;
    }
  }, {
    key: 'hide',
    decorators: [_ngAnnotations.autobind],
    value: function hide() {
      this.current = '';
    }
  }, {
    key: 'canShow',
    decorators: [_ngAnnotations.autobind],
    value: function canShow(id) {
      return this.current === id;
    }
  }, {
    key: 'getCurrent',
    decorators: [_ngAnnotations.autobind],
    value: function getCurrent() {
      return this.current;
    }
  }, {
    key: '$expose',
    value: function $expose() {
      return {
        show: this.show,
        hide: this.hide,
        canShow: this.canShow,
        getCurrent: this.getCurrent
      };
    }
  }]);

  var _BModalFactory = BModalFactory;
  BModalFactory = (0, _ngAnnotations.factory)('bModalFactory')(BModalFactory) || BModalFactory;
  return BModalFactory;
})();

exports.BModalFactory = BModalFactory;