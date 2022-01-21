<template>
  <div class="rotate" :class="direction"></div>
</template>

<script>
/**
 * 强制用户旋转手机组件
 */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RotatePhone',
  props: {
    direction: {
      // 转屏方向 landscape portrait
      type: String,
      default: 'landscape'
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('./style.scss');
</style>
