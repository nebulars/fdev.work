<style lang="less">
section,
.section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

<template>
  <section :style="style">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    flex: {
      type: Boolean,
      default: false,
    },

    vertical: {
      type: Boolean,
      default: false,
    },

    justify: {
      type: String,
      default: 'normal',
    },

    align: {
      type: String,
      default: 'normal',
    },

    gap: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    style() {
      return {
        display: this.flex ? 'flex' : 'block',
        flexDirection: this.vertical ? 'column' : 'row',
        justifyContent: this.justify,
        alignItems: this.align,
        gap: `${this.gap}px`,
      };
    },
  },
};
</script>
