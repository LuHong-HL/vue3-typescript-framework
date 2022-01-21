import { render, h } from 'vue'
import LoadingConstructor from './index.vue'

const initLoadingInstance = (props: any, contianer: any) => {
  const vnode = h(LoadingConstructor, props)
  render(vnode, contianer)
  document.body.appendChild(contianer)
  return vnode.component
}

const nodeInstance = document.createElement('div')

const removeDom = (node: any) => {
  if (node.parentNode) node.parentNode.removeChild(node)
}

const closeLoading = () => {
  removeDom(nodeInstance)
}
const showLoading = () => {
  initLoadingInstance({}, nodeInstance)
}

export default {
  show: showLoading,
  close: closeLoading
}
