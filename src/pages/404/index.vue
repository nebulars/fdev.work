<style lang="less" scoped>
.pageNotFound {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

video {
  min-width: 100%;
  min-height: 100%;

  object-fit: fill;
}
</style>

<template>
  <div class="pageNotFound">
    <video preload muted loop autoplay :src="`${state.oss}/404.mp4`"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
