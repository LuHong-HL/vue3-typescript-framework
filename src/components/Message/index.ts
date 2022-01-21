import { h, render, nextTick } from 'vue'
import MessageConstuctor from './index.vue'

const initInstance = (props: any, contianer: any) => {
  const vnode: any = h(MessageConstuctor, props)
  render(vnode, contianer)
  nextTick(() => {
    let $el = null
    let $overlay = null
    if (vnode.props.type === 'messageBox') {
      $overlay = contianer.firstElementChild
      $el = $overlay.nextElementSibling
    } else {
      $el = contianer.firstElementChild
    }

    $overlay && document.body.appendChild($overlay)
    document.body.appendChild($el)
  })
  return vnode.component
}

function Message(e: any) {
  let options = {}
  if (typeof e === 'string') {
    options = {
      message: e
    }
  } else {
    options = { ...e }
  }
  const instance = initInstance(options, document.createElement('div'))
  const vm = instance.proxy
  vm.visible = true
}
Message.show = (e: any) => {
  return Message(e)
}
Message.box = (e: any) => {
  let params = {}
  if (typeof e === 'string') {
    params = {
      message: e
    }
  } else {
    params = { ...e }
  }
  return Message({ ...params, type: 'messageBox', duration: 0 })
}

export default Message
