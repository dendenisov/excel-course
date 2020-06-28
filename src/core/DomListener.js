import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('no $root provided for DomListener!')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {

  }
}

function getMethodName(eventName) {
  return 'on' + capitalize(eventName)
}
