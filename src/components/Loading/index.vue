<template>
  <div class="loading">
    <div class="content">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'loadingConstructor',

  props: {},
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: rgba(#000, 0.3);
  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 100px;
    height: 100px;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fa3;
      position: absolute;
      animation: load 1.04s ease infinite;
      &:nth-child(1) {
        left: 0;
        top: 50%;
        margin-top: -10px;
        animation-delay: 0.13s;
      }
      &:nth-child(2) {
        left: 14px;
        top: 14px;
        animation-delay: 0.26s;
      }
      &:nth-child(3) {
        left: 50%;
        top: 0;
        margin-left: -10px;
        animation-delay: 0.39s;
      }
      &:nth-child(4) {
        top: 14px;
        right: 14px;
        animation-delay: 0.52s;
      }
      &:nth-child(5) {
        right: 0;
        top: 50%;
        margin-top: -10px;
        animation-delay: 0.65s;
      }
      &:nth-child(6) {
        right: 14px;
        bottom: 14px;
        animation-delay: 0.78s;
      }
      &:nth-child(7) {
        bottom: 0;
        left: 50%;
        margin-left: -10px;
        animation-delay: 0.91s;
      }
      &:nth-child(8) {
        bottom: 14px;
        left: 14px;
        animation-delay: 1.04s;
      }
    }
  }
  @keyframes load {
    0% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(0.3);
      opacity: 0.5;
    }
  }
}
</style>
