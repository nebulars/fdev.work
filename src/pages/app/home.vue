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
  <s-video src="https://oss.rtclouddata.cn/fdev/bg.mp4" />

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

        <div>
          <qrcode :size="240" :value="qr_mini">
            <a-flex vertical justify="center" align="center" gap="middle">
              <img class="icon" width="64" src="@/assets/icon_wechat.png" />
              <div>
                小程序扫码
                <br />
                Mini Program
              </div>
            </a-flex>
          </qrcode>
        </div>
        <div>
          <qrcode :size="240" :value="qr_android">
            <a-flex vertical justify="center" align="center" gap="middle">
              <img class="icon" width="64" src="@/assets/icon_android.png" />
              <div>
                安卓下载
                <br />
                Android Download
              </div>
            </a-flex>
          </qrcode>
        </div>
      </a-carousel>
    </s-phone>
  </s-section>
</template>

<script>
export default {
  data() {
    return {
      qr_mini: `https://open.weixin.qq.com/sns/getexpappinfo?appid=wx4dd23f80ad9c9911&path=pages%2Fins%2Fwelcome.html#wechat-redirect`,
      qr_android: `https://oss.rtclouddata.cn/fdev/finqa_android.apk`,
    };
  },

  mounted() {
    this.$nextTick(() => {
      const { typeit: target } = this.$refs;
      const html = `欢迎使用 FinQA 智能问答<br />一款专注于提供金融行研领域的智能问答系统`;
      this.$util.print(target, html, { speed: 100, loop: true }).pause(5000).empty();
    });
  },
};
</script>
