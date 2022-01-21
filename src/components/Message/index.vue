<template>
  <div
    class="message-plugin-overlay"
    @click="closeHandler"
    v-if="type === 'messageBox' && visible === true"
  ></div>
  <div class="message-plugin" v-if="visible">
    <template v-if="type === 'message'">
      <div class="messasge-toast">
        <div :class="`icon ${icon} `" v-if="icon"></div>
        <div class="context">
          <div v-if="typeof message === 'string'" v-html="message"></div>
          <Render v-if="typeof message === 'function'" :render="message"></Render>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="message-box">
        <div class="message-box-header" v-if="title">{{ title }}</div>
        <div class="message-box-body">
          <div
            v-if="typeof message === 'string'"
            class="message-box-body_inner"
            v-html="message"
          ></div>
          <Render v-if="typeof message === 'function'" :render="message"></Render>
        </div>
        <div class="message-box-footer">
          <button v-if="cancelButton" :class="`btn cancel-button`" @click="closeHandler">
            取消
          </button>
          <button :class="`btn confirm-button`" @click="confirmHandler">确认</button>
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import {
  defineComponent, onMounted, reactive, toRefs
} from 'vue'
import Render from './render'

export default defineComponent({
  name: 'messagePlugin',
  components: {
    Render
  },
  props: {
    type: {
      type: String,
      default: () => 'message',
      validator: (v: string) => {
        return ['message', 'messageBox'].includes(v)
      }
    },
    icon: {
      type: String,
      default: () => ''
    },
    message: {
      type: [String, Function],
      default: () => ''
    },
    duration: {
      type: Number,
      default: () => 2000
    },
    cancelButton: {
      type: Boolean,
      default: () => false
    },
    onClose: {
      type: Function,
      default: () => null
    },
    onConfirm: {
      type: Function,
      default: () => null
    },
    title: {
      type: String,
      default: () => '提示'
    }
  },
  setup(props) {
    const state = reactive({
      visible: false
    })

    let timer = null as any
    // 关闭回调
    const closeHandler = () => {
      props.onClose && props.onClose()
      state.visible = false
    }

    // 确认回调
    const confirmHandler = () => {
      props.onConfirm && props.onConfirm()
      closeHandler()
    }

    const startTime = () => {
      if (props.duration) {
        timer = setTimeout(() => {
          window.clearTimeout(timer)
          timer = null
          closeHandler()
        }, props.duration)
      }
    }

    onMounted(() => {
      startTime()
      state.visible = true
    })

    return {
      ...toRefs(state),
      closeHandler,
      confirmHandler
    }
  }
})
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>
