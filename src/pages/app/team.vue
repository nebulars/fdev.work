<style lang="less" scoped>
.team {
  height: 100%;

  &-carousel {
    width: 480px;
    height: 680px;
    padding: 40px;

    &-prev,
    &-next {
      width: 32px;
      height: 32px;
      font-size: 32px;
      color: @color-text;
      transition: all 0.24s;
      opacity: 0;
      z-index: 1;

      .anticon {
        color: white;
      }

      &:hover {
        opacity: 1;
      }

      &:before {
        display: none;
      }
    }

    &-prev {
      left: 0;
    }

    &-next {
      right: 0;
    }

    &:hover {
      .team-carousel-prev,
      .team-carousel-next {
        opacity: 0.6;
      }

      .team-carousel-prev {
        left: -36px;
      }

      .team-carousel-next {
        right: -36px;
      }
    }
  }

  &-avatar {
    width: 360px;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-list {
    padding-inline-start: 1.75rem;
  }
}
</style>

<template>
  <s-section class="team" :flex="true" :vertical="true" justify="center" align="center" :gap="60">
    <a-carousel :arrows="true" :autoplay="false" :dots="false" :autoplay-speed="5000" class="team-carousel">
      <template #prevArrow>
        <div class="team-carousel-prev">
          <left-circle-outlined />
        </div>
      </template>

      <template #nextArrow>
        <div class="team-carousel-next">
          <right-circle-outlined />
        </div>
      </template>

      <div>
        <a-card hoverable>
          <template #cover>
            <div class="team-avatar">
              <a-avatar :size="240">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </div>
          </template>
          <a-card-meta title="楼筱卿・CEO">
            <template #description>
              <ul class="team-list">
                <li>深耕 互联网行业 20年，专精各类研发技术落地</li>
                <li>先后于 宝尊、微盟、领健 等多家独角兽公司担任核心技术骨干</li>
                <li>致力于以技术驱动业务增长与商业模式创新</li>
              </ul>
            </template>
          </a-card-meta>
        </a-card>
      </div>

      <div>
        <a-card hoverable>
          <template #cover>
            <div class="team-avatar">
              <a-avatar :size="240">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </div>
          </template>
          <a-card-meta title="王世禄・CTO">
            <template #description>
              <ul class="team-list">
                <li>Description 1</li>
                <li>Description 2</li>
                <li>Description 3</li>
                <li>Description 4</li>
              </ul>
            </template>
          </a-card-meta>
        </a-card>
      </div>

      <div>
        <a-card hoverable>
          <template #cover>
            <div class="team-avatar">
              <a-avatar :size="240">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </div>
          </template>
          <a-card-meta title="朱晓勇・CIO">
            <template #description>
              <ul class="team-list">
                <li>Description 1</li>
                <li>Description 2</li>
                <li>Description 3</li>
                <li>Description 4</li>
              </ul>
            </template>
          </a-card-meta>
        </a-card>
      </div>

      <div>
        <a-card hoverable>
          <template #cover>
            <div class="team-avatar">
              <a-avatar :size="240">
                <template #icon>
                  <UserOutlined />
                </template>
              </a-avatar>
            </div>
          </template>
          <a-card-meta title="陈琳・CFO">
            <template #description>
              <ul class="team-list">
                <li>Description 1</li>
                <li>Description 2</li>
                <li>Description 3</li>
                <li>Description 4</li>
              </ul>
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </a-carousel>
    <h1>Presents By Qianape Team</h1>
  </s-section>
</template>

<script>
export default {};
</script>
