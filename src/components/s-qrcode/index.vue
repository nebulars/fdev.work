<style lang="less" scoped>
.qrcode {
  width: 240px;
  padding: 10px;
  box-sizing: border-box;

  &-wrapper {
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.8);
  }

  &-text {
    text-align: center;
  }

  img,
  canvas {
    max-width: 100%;
  }
}
</style>

<template>
  <div class="qrcode">
    <a-flex class="qrcode-wrapper" vertical justify="center" align="center" gap="middle">
      <qrcode :size="220" :value="src" :margin="4"> </qrcode>

      <img class="icon" width="64" :src="icon" />
      <div class="qrcode-text">
        {{ text }}
        <br />
        {{ translate }}
        <br />
        <span>　</span>
      </div>
    </a-flex>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      default: '',
    },

    translate: {
      type: String,
      default: '',
    },
  },
};
</script>
