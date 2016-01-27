'use strict'
//NOTE: Do not remove the comments!!!

/* [Start Import] */
import angular from 'angular'
import {BModalFactory} from './factories/b-modal-factory.js'
import {BModalController} from './controllers/b-modal-controller.js'
import {BModalDirective} from './directives//b-modal-directive.js'
/* [End Import] */

var angularImports = []

var app = angular.module('bModal', angularImports)

/* [Start Declarations] */
app.factory(BModalFactory.$name, BModalFactory.$component)
app.controller(BModalController.$name, BModalController.$component)
app.directive(BModalDirective.$name, BModalDirective.$component)
/* [End Declarations] */

module.exports = app.name
