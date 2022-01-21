export default {
  name: 'formExtends',
  functional: true,
  props: {
    render: {
      type: Function
    }
  },
  render(): any {
    return this.render()
  }
}
