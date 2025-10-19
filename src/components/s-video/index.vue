<style lang="less" scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  &.fullscreen {
    width: auto;
    height: 100%;
  }
}
</style>

<template>
  <video :class="{ fullscreen }" :src="src" type="video/mp4" autoplay muted loop playsinline webkit-playsinline preload="none" :controls="false" ref="video">您的浏览器不支持 HTML5 video 标签</video>
</template>

<script>
export default {
  props: {
    src: {
      type: [String],
      default: '',
    },
  },

  data() {
    return {
      fullscreen: false,
    };
  },
};
</script>
