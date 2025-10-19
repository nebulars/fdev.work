<style lang="less" scoped>
footer {
  height: 36px;
  line-height: 36px;

  a {
    color: @color-text;
    text-decoration: none;
  }
}
</style>

<template>
  <footer>
    <s-section :flex="true" justify="center" align="center">
      <a-space :size="10">
        <span>Copyright © 2025 Qianape Team.</span>
        <a href="https://beian.miit.gov.cn">沪ICP备20017142号-5</a>
      </a-space>
    </s-section>
  </footer>
</template>

<script>
export default {};
</script>
