<style lang="less" scoped>
.video {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 100%;
    height: auto;

    &.fullscreen {
      width: auto;
      height: 100%;
    }
  }
}
</style>

<template>
  <div class="video">
    <video :class="{ fullscreen }" src="@/assets/bg.mp4" type="video/mp4" autoplay muted loop playsinline webkit-playsinline preload="none" :controls="false" ref="video">您的浏览器不支持 HTML5 video 标签</video>
  </div>
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

  watch: {
    src: {
      handler(value) {
        this.$nextTick(() => {
          const { video } = this.$refs;
          this.fullscreen = window.innerWidth < window.innerHeight;
        });
      },

      deep: true,
      immediate: true,
    },
  },
};
</script>
