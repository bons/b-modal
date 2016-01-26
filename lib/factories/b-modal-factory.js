'use strict'
import {factory, autobind} from 'ng-annotations'

@factory('bModalFactory')
class BModalFactory {

  current

  @autobind
  show (id) {
    if (id === this.current) return

    this.current = id
  }

  @autobind
  hide () {
    this.current = ''
  }

  @autobind
  canShow (id) {
    return this.current === id
  }

  @autobind
  getCurrent () {
    return this.current
  }

  $expose () {
    return {
      show       : this.show,
      hide       : this.hide,
      canShow    : this.canShow,
      getCurrent : this.getCurrent
    }
  }
}

export {BModalFactory}
