<style lang="less" scoped>
.iphone {
  & {
    width: 376px;
    height: 750px;
    background: url(@/assets/iphone.png) center/cover no-repeat;
    position: relative;
  }

  &-container,
  &-background {
    top: 12px;
    bottom: 12px;
    left: 20px;
    right: 20px;
    position: absolute;
    border-radius: 40px;
  }

  &-background {
    background-color: rgba(255, 255, 255, 0.25);
  }

  &-container {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    z-index: 1;
    color: @color-app;
    padding: 20px;
  }
}
</style>

<template>
  <div class="iphone">
    <div class="iphone-container">
      <slot />
    </div>
    <div class="iphone-background"></div>
  </div>
</template>
