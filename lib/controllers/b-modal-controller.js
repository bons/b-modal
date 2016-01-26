'use strict'
import {controller, inject} from 'ng-annotations'

@controller('bModalController')
@inject('$scope', 'bModalFactory')
class BModalController {

  constructor ($scope, bModalFactory) {
    this.name = $scope.bModal
    this.bModalFactory = bModalFactory
  }

  hide () {
    this.bModalFactory.hide(this.name)
  }

  show () {
    this.bModalFactory.show(this.name)
  }

  canShow () {
    return this.bModalFactory.canShow(this.name)
  }

  avoidHide (evt) {
    evt.stopPropagation()
  }
}

export {BModalController}
