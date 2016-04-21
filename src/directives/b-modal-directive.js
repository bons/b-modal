'use strict'
import {directive} from 'ng-annotations'

@directive('bModal')
class BModalDirective {

  constructor () {
    this.restrict = 'EA'
    this.scope = {
      bModal : '@',
      data   : '=',
      zIndex : '@',
      avoidAutohide : '=?'
    }
    this.transclude = true
    this.controller = 'bModalController'
    this.controllerAs = 'bModalController'
  }

  link (scope, elem, attr, ctrl, trans) {
    elem.css({
      position  : 'fixed',
      left      : '0px',
      top       : '0px',
      right     : '0px',
      bottom    : '0px',
      'z-index' : scope.zIndex || 9999
    })

    if (!scope.avoidAutohide) {
      elem.bind('click', () => {
        ctrl.hide()
        scope.$apply()
      })
    }

    scope.$watch(() => ctrl.canShow(), (canShow) => {
      if (canShow) {
        elem.css({'display' : 'block'})
      } else {
        elem.css({'display' : 'none'})
      }
    })

    trans(scope, (clone) => {
      elem.append(clone)
    })
  }
}

export {BModalDirective}
