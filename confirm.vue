<style>
  *{
    margin: 0;
    padding: 0;
  }
  .wh {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 998;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  .wh-popup {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 50%;
    overflow: hidden;
    width: 270px;
    -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);
    text-align: center;
    color: #000;
    border-radius: 13px;
  }
  .wh-popup.wh-popup-in {
    display: block;
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
  }
  .wh-popup.wh-popup-out {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 0;
  }
  .wh-popup-inner {
    position: relative;
    padding: 15px;
    border-radius: 13px 13px 0 0;
    background: rgba(255, 255, 255, .95);
  }
  .wh-popup-inner:after {
    position: absolute;
    z-index: 15;
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
    transform: scaleY(.5);
    transform-origin: 50% 100%;
    background-color: rgba(0, 0, 0, .2);
  }
  .wh-popup-title {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .wh-popup-title + .wh-popup-text {
    font-family: inherit;
    font-size: 14px;
    margin: 5px 0 0;
  }
  .wh-popup-buttons {
    position: relative;
    display: flex;
    height: 44px;
    justify-content: center;
  }
  .wh-popup-button {
    font-size: 17px;
    line-height: 44px;
    position: relative;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 5px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #3478f6;
    background: rgba(255, 255, 255, .95);
    letter-spacing: 0.5px;
    cursor: pointer;
  }
  .wh-popup-button:after {
    position: absolute;
    z-index: 15;
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    display: block;
    width: 1px;
    height: 100%;
    content: '';
    transform: scaleX(.5);
    transform-origin: 100% 50%;
    background-color: rgba(0, 0, 0, .2);
  }
  .wh-popup-button:first-child {
    border-radius: 0 0 0 13px;
    border-right: 1px solid rgba(255, 255, 255, .95);
  }
  .wh-popup-button:first-child:last-child {
    border-radius: 0 0 13px 13px;
  }
  .wh-popup-button:last-child {
    border-radius: 0 0 13px 0;
  }
  .wh-popup-button-bold {
    font-weight: 600;
  }
  .wh-popup-button:last-child:after {
    display: none;
  }

  /* wh-prompt */
  .wh-popup-input {
    width: 100%;
    margin-top: 12px;
  }
  .wh-popup-input input {
    user-select: text;
    -webkit-appearance: none;
    width: 90%;
    height: 26px;
    margin: 0 auto;
    padding: 0 5px;
    font-size: 14px;
    background: #fff;
    border: 0.5px solid rgba(0, 0, 0, .2);
    border-radius: 0;
  }
  .wh-fade-alert-enter {
    opacity: 0;
  }
  .wh-fade-alert-enter .wh-popup {
    transform: translate3d(-50%, -50%, 0) scale(1.185);
  }
  .wh-fade-alert-enter-active, .wh-fade-alert-leave-active {
    transition: all .4s;
  }
  .wh-fade-alert-enter-active .wh-popup, .wh-fade-alert-leave-active .wh-popup{
    transition: all .4s;
  }
  .wh-fade-alert-leave-active {
    opacity: 0;
  }
</style>
<template>
  <transition name="wh-fade-alert">
    <div v-if="show" class="wh">
      <div class="wh-popup wh-popup-in">
        <div class="wh-popup-inner">
          <div class="wh-popup-title">提示</div>
          <div class="wh-popup-text">{{content}}</div>
        </div>
        <div class="wh-popup-buttons">
          <span class="wh-popup-button"  @click="success">确定</span>
          <span class="wh-popup-button"  @click="cancel">取消</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data () {
      return {
        show: false,
        content: ''
      }
    },
    computed: {

    },
    mounted () {
    },
    methods: {
      success () {
        this.show = false;
      },
      cancel () {
        this.show = false;
      }
    }
  }
</script>
