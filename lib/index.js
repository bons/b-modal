'use strict';
//NOTE: Do not remove the comments!!!

/* [Start Import] */

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _factoriesBModalFactoryJs = require('./factories/b-modal-factory.js');

var _controllersBModalControllerJs = require('./controllers/b-modal-controller.js');

var _directivesBModalDirectiveJs = require('./directives//b-modal-directive.js');

/* [End Import] */

var angularImports = [];

var app = _angular2['default'].module('bModal', angularImports);

/* [Start Declarations] */
app.factory(_factoriesBModalFactoryJs.BModalFactory.$name, _factoriesBModalFactoryJs.BModalFactory.$component);
app.controller(_controllersBModalControllerJs.BModalController.$name, _controllersBModalControllerJs.BModalController.$component);
app.directive(_directivesBModalDirectiveJs.BModalDirective.$name, _directivesBModalDirectiveJs.BModalDirective.$component);
/* [End Declarations] */

module.exports = app.name;