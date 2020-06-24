export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  render() {
    this.$el.insertAdjacentHTML('afterbegin', '<h1>Test</h1>')
  }
}
