<style lang="less" scoped>
header,
nav {
  display: flex;
  align-items: center;
}

header {
  justify-content: space-between;
}

header {
  height: 64px;
  padding-inline: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  background-color: rgba(0, 0, 0, 0.1);
}

nav {
  & {
    height: 100%;
    gap: 20px;
  }

  .normal {
    color: @color-text;

    &:after {
      width: 0;
      left: 50%;
    }
  }

  .current {
    color: @color-primary;

    &:after {
      width: 100%;
      left: 0;
    }
  }

  a {
    .normal;

    width: 80px;
    line-height: 64px;
    font-size: 16px;
    display: block;
    text-align: center;
    text-decoration: none;
    position: relative;
    transition: all 0.24s;

    &:after {
      content: '';
      position: absolute;
      height: 4px;
      bottom: -2px;
      border-radius: 2px;
      transition: all 0.24s;
      background-color: @color-primary;
    }

    &.active {
      .current;
    }

    &:hover {
      .active !important;
    }
  }

  &:hover {
    a {
      .normal;
    }
  }
}

.logo {
  height: 36px;

  img {
    height: 100%;
  }
}
</style>

<template>
  <header>
    <s-section :flex="true" justify="space-between" align="center">
      <a class="logo" href="/">
        <img src="@/assets/name.png" />
      </a>

      <nav>
        <router-link active-class="active" to="/home">首页</router-link>
        <router-link active-class="active" to="/team">团队</router-link>
      </nav>
    </s-section>
  </header>
</template>

<script>
export default {};
</script>
