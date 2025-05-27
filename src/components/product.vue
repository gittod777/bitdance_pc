<template>
  <div class="wrap">
    <div class="top-wrap">
      <h3>多元化生态产品</h3>
      <h5>乐玩游戏多年技术沉淀，多款产品共筑产品矩阵</h5>
    </div>
    <div class="tabs-wrap">
      <div class="header-wrap">
        <div class="header-list">
          <div
            class="header-item"
            :class="{ active: productIndex === index }"
            v-for="(item, index) in productList"
            :key="item.name"
            @click="changeProduct(item, index)"
          >
            <img
              v-if="productIndex === index"
              :src="item.activeImgurl"
              alt=""
            />
            <img v-else :src="item.imgurl" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="tab-con-wrap">
        <div class="tab-con-list">
          <img :src="selectProduct.productImg" class="bg-img" alt="" />
          <div class="swiper-wrap">
            <swiper
              class="swiper"
              :modules="modules"
              :space-between="30"
              slides-per-view="auto"
              :centered-slides="true"
              @swiper="setSwiperRef"
              @slideChange="swiperChange"
            >
              <swiper-slide
                v-for="item in productList"
                :key="item.name"
                class="item-wrap"
                ><div class="title-wrap">
                  <h4 class="ellipsis">{{ item.name }}</h4>
                  <p class="ellipsis2">{{ item.msg }}</p>
                </div>
                <div class="btn-wrap">
                  <div class="btn-group" v-if="item.name === '乐玩包网'">
                    <button type="button" class="btn ant-btn" @click="to">
                      <span>产品介绍</span
                      ><i aria-label="icon: right" class="anticon anticon-right"
                        ><svg
                          viewBox="64 64 896 896"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                          ></path></svg
                      ></i>
                    </button>
                    <button
                      type="button"
                      class="btn ant-btn ghost"
                      @click="$router.push('/demo')"
                    >
                      <span>查看模版</span
                      ><i aria-label="icon: right" class="anticon anticon-right"
                        ><svg
                          viewBox="64 64 896 896"
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          class=""
                        >
                          <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                          ></path></svg
                      ></i>
                    </button>
                  </div>
                  <button v-else type="button" class="btn ant-btn" @click="to">
                    <span>产品介绍</span
                    ><i aria-label="icon: right" class="anticon anticon-right"
                      ><svg
                        viewBox="64 64 896 896"
                        data-icon="right"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path
                          d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                        ></path></svg
                    ></i>
                  </button></div
              ></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
export default {
  name: "product-view",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [EffectCoverflow],
      swiperModel: null,
      productIndex: 0,
      productList: [
        {
          name: "乐玩包网",
          imgurl: require("../assets/img/web.d357a26.png"),
          activeImgurl: require("../assets/img/web-active.56b6727.png"),
          productImg: require("../assets/img/web.9b493c8.png"),
          msg: "提供丰富多彩模版和稳定、安全、可靠的网站建设服务，致力打造行业标杆",
        },
        {
          name: "综合色站",
          imgurl: "https://m.acb.bet/_nuxt/img/color.d6eefaf.png",
          activeImgurl: "https://m.acb.bet/_nuxt/img/color-active.3b1c423.png",
          productImg: require("../assets/img/color.fefafad.png"),
          msg: "一站式拥有AV视频、漫画、色播、BC等，产品模块任意组合！",
        },
        {
          name: "体育直播",
          imgurl: "https://m.acb.bet/_nuxt/img/sport.30ba2dc.png",
          activeImgurl: "https://m.acb.bet/_nuxt/img/sport-active.f4484ad.png",
          productImg: require("../assets/img/sport.f39887e.png"),
          msg: "专业的体育赛事直播服务平台",
        },
      ],
      selectProduct: {
        name: "",
        msg: "",
        productImg: "",
      },
    };
  },
  mounted() {
    this.selectProduct = { ...this.productList[0] };
  },
  methods: {
    setSwiperRef(swiper) {
      this.swiperModel = swiper;
    },
    to() {
      switch (this.selectProduct.name) {
        case "乐玩包网":
          this.$router.push("/web");
          break;
        case "综合色站":
          this.$router.push("/color");
          break;
        case "体育直播":
          this.$router.push("/sport");
          break;
      }
    },
    changeProduct(item, index) {
      this.productIndex = index;
      this.selectProduct = { ...item };

      console.log(this.$refs.swiper);
      this.swiperModel.slideTo(Number(index));
    },
    swiperChange(e) {
      console.log(e);
      this.productIndex = e.activeIndex;
      this.selectProduct = { ...this.productList[e.activeIndex] };
    },
  },
};
</script>
<style lang="less">
.van-swipe__track {
  // margin: 0 1rem;
  // transform: translate3d(1rem, 0px, 0px) !important;
}
</style>
<style lang="less" scoped>
.tabs-wrap {
  margin-top: 0.4rem;
  .header-wrap {
    width: 100%;
    overflow: scroll;
    .header-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .header-item {
        padding: 0 0.26667rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        font-size: 0.42667rem;
        margin-right: 0.58667rem;
        img {
          width: 1.33333rem;
          height: 1.33333rem;
        }
        p {
          margin-top: 0.26667rem;
          font-size: 0.32rem;
          color: #656f81;
        }
      }
      .header-item:nth-child(1) {
        margin-left: 0.4rem;
      }
      .active {
        position: relative;
        img {
          width: 1.38667rem;
          height: 1.44rem;
        }
        p {
          color: #0c5afc;
        }
      }
    }
  }
  .tab-con-wrap {
    width: 100%;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    .tab-con-list {
      margin-top: 0.37333rem;
      background-image: url(https://m.acb.bet/_nuxt/img/bg.5315669.png);
      background-size: 100% 100%;
      position: relative;
      width: 10rem;
      height: 9.04rem;
      padding-bottom: 0.53333rem;
      overflow: hidden;
      .bg-img {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: auto;
      }
      .swiper-wrap {
        margin-top: 4.53333rem;
      }
      .item-wrap {
        width: 8rem !important;
        height: 3.89333rem;
        background: #fff;
        flex-shrink: 0;
        box-shadow: 0 0.05333rem 0.58667rem 0 rgba(0, 0, 0, 0.11);
        border-radius: 0.05333rem;
        padding: 0.53333rem 0.4rem;
        position: relative;
        // margin-left: 0.5rem;
        .title-wrap {
          margin-right: 0.8rem;
          h4 {
            font-size: 0.48rem;
            font-weight: 500;
            color: #1d2129;
            line-height: 0.66667rem;
            margin-bottom: 0.10667rem;
          }
          p {
            font-size: 0.32rem;
            color: #656f81;
          }
        }
        .btn-wrap {
          position: absolute;
          bottom: 0.53333rem;
          left: 0.4rem;
          right: 0.4rem;
          .btn-group {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            justify-content: flex-start;
            gap: 0.21333rem;

            .ghost {
              background: #fff;
              border: 0.02667rem solid #2880ff;
              color: #2880ff;
            }
          }
          .btn {
            margin-top: 0.53333rem;
            width: 2.4rem;
            height: 0.85333rem;
            background: linear-gradient(231deg, #188efe 0, #0658ea 100%);
            border-radius: 0.05333rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 0.32rem;
            color: #fff;
            cursor: pointer;
            padding: 0 0.26667rem;
            i {
              font-size: 0.21333rem;
            }
          }
        }
      }
    }
  }
}
.wrap {
  padding-top: 0.64rem;
}
</style>
