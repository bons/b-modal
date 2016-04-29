'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ngAnnotations = require('ng-annotations');

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var BModalDirective = (function () {
  function BModalDirective() {
    _classCallCheck(this, _BModalDirective);

    this.restrict = 'EA';
    this.scope = {
      bModal: '@',
      data: '=',
      zIndex: '@',
      avoidAutohide: '=?'
    };
    this.transclude = true;
    this.controller = 'bModalController';
    this.controllerAs = 'bModalController';
  }

  _createClass(BModalDirective, [{
    key: 'link',
    value: function link(scope, elem, attr, ctrl, trans) {
      elem.css({
        position: 'fixed',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        'z-index': scope.zIndex || 9999
      });

      if (!scope.avoidAutohide) {
        elem.bind('click', function () {
          ctrl.hide();
          scope.$apply();
        });
      }

      function onKeydown(evt) {
        if (evt.keyCode === 27) {
          ctrl.hide();
          scope.$apply();
        }
      }

      scope.$watch(function () {
        return ctrl.canShow();
      }, function (canShow) {
        if (canShow) {
          elem.css({ 'display': 'block' });
          if (!scope.avoidAutohide) document.addEventListener('keydown', onKeydown);
        } else {
          elem.css({ 'display': 'none' });
          if (!scope.avoidAutohide) document.removeEventListener('keydown', onKeydown);
        }
      });

      trans(scope, function (clone) {
        elem.append(clone);
        _angular2['default'].element(elem[0].firstChild).bind('click', ctrl.avoidHide);
      });
    }
  }]);

  var _BModalDirective = BModalDirective;
  BModalDirective = (0, _ngAnnotations.directive)('bModal')(BModalDirective) || BModalDirective;
  return BModalDirective;
})();

exports.BModalDirective = BModalDirective;