<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.typeit {
  font-size: 30px;
  line-height: 2;
}

.iphone {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.78;
}

.icon {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.125));
}

.carousel {
  & {
    width: 280px;
    height: 360px;
  }

  &-item {
    display: flex !important;
    justify-content: center;
  }

  &-prev,
  &-next {
    width: 32px;
    height: 32px;
    font-size: 32px;
    color: @color-text;
    transition: all 0.24s;
    opacity: 0.6;
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
    left: -16px;
  }

  &-next {
    right: -16px;
  }
}
</style>

<template>
  <s-video src="https://oss.billionsintelligence.com/download/fdev_bg.mp4" />

  <s-section class="home" :flex="true" justify="space-between" align="center">
    <div class="typeit" ref="typeit"></div>

    <s-phone class="iphone">
      <a-carousel :arrows="true" :dots="false" class="carousel">
        <template #prevArrow>
          <div class="carousel-prev">
            <left-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="carousel-next">
            <right-outlined />
          </div>
        </template>

        <div class="carousel-item">
          <s-qrcode :src="qr_mini" :icon="iconWechat" text="小程序扫码" translate="Mini Program"></s-qrcode>
        </div>

        <div class="carousel-item">
          <s-qrcode :src="qr_android" :icon="iconAndroid" text="安卓下载" translate="Android Download"></s-qrcode>
        </div>
      </a-carousel>
    </s-phone>
  </s-section>
</template>

<script>
import iconWechat from '@/assets/icon_wechat.png';
import iconAndroid from '@/assets/icon_android.png';

export default {
  data() {
    return {
      qr_mini: `https://open.weixin.qq.com/sns/getexpappinfo?appid=wx4dd23f80ad9c9911&path=pages%2Fins%2Fwelcome.html#wechat-redirect`,
      qr_android: `https://oss.rtclouddata.cn/fdev/finqa_android.apk`,
      iconWechat,
      iconAndroid,
    };
  },

  mounted() {
    this.$nextTick(() => {
      const { typeit: target } = this.$refs;

      const html = [
        // 1
        `前猿科技<br />一支专注于技术落地的小团队`,
        // 2
        `　我们擅长：<br />・小程序、APP、跨端研发<br />・网站建设、软件定制、系统集成<br />・AI 私域、RAG 检索、大模型接入`,
        // 3
        `　引以为傲的数据：<br />・5年 客户 OD 经验<br />・23个 To B 成功案例<br />・115个 交付案例<br />・42% 企业复购率`,
        // 4
        `准备好为您的业务提速了吗？`,
      ];

      this.$util
        // 1
        .print(target, html[0], { speed: 100, loop: true })
        .pause(5000)
        .empty()

        // 2
        .type(html[1])
        .pause(5000)
        .empty()

        // 3
        .type(html[2])
        .pause(5000)
        .empty()

        // 4
        .type(html[3])
        .pause(5000)
        .empty()

        // Trigger
        .go();

      this.$util.print(target, `・小程序、APP、跨端研发<br />・网站建设、软件定制、系统集成<br />・AI 私域、RAG 搜索、模型接入`, { speed: 100, loop: true }).pause(5000).empty();
    });
  },
};
</script>
