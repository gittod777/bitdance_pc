<template>
  <div class="wrap">
    <div class="bg">
      <!-- <h3>乐玩游戏品牌战略目标</h3> -->
    </div>
  </div>
  <div class="wrap-one">
    <div class="top-wrap">
      <h3>品牌战略</h3>
    </div>
    <div class="con-main-wrap-one">
      <div class="img-wrap">
        <img src="../assets/img/intro.eaace9a.png" alt="" class="img-con" />
      </div>
      <div class="con">
        <p class="autoline">
          拥有强大的商业合作伙伴，可以展现出一家公司的行业地位与综合实力。LeWan乐玩游戏近年与多家行业翘楚展开深入合作，进一步扩大了其市场影响力，同时也深刻的影响着行业的发展方向。
          在受到市场广泛关注的同时，LeWan乐玩游戏也更加注重自身产品的研发，并于2022年率先完成行业全线产品的研发。在公司愿景“让每个商户都可以轻松开站”的指引下，我们将一如既往的助力每个渴望成功的商户，一起携手引领未来，迈向新的事业航程。
        </p>
      </div>
    </div>
  </div>
  <div class="wrap-two">
    <div class="top-wrap">
      <h3>合作伙伴</h3>
    </div>
    <div class="con-main-wrap-two">
      <div class="tab-wrap">
        <div
          class="tab-item"
          :class="{ active: listIndex === index }"
          v-for="(item, index) in list"
          :key="item.name"
          @click="listIndex = index"
        >
          <img v-if="listIndex === index" :src="item.url1" alt="" />
          <img v-else :src="item.url" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
      <!-- <div class="con-wrap">
        <h4>内容简介</h4>
        <img src="../assets/img/con-1.af9f9bc.png" alt="" class="img-con" />
        <p>
          在大多数包网商只投放一个格子广告位的时候，LeWan乐玩游戏长期赞助一个大横幅广告，一个右对联广告，这不仅是公司实力商的展示，更是对自身产品的充分自信的体现。
        </p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "cooperateView",
  components: {},
  data() {
    return {
      list: [
        {
          name: "博度",
          url: require("../assets/img/icon-1.7514ad9.png"),
          url1: require("../assets/img/icon-1-b.991ae8e.png"),
        },
        {
          name: "谷歌搜索",
          url: require("../assets/img/icon-2.410a1bf.png"),
          url1: require("../assets/img/icon-2-b.9f1e768.png"),
        },
        {
          name: "马尼拉地标MOA大球",
          url: require("../assets/img/icon-3.png"),
          url1: require("../assets/img/icon-3-b.png"),
        },
        {
          name: "新加坡G2E展会",
          url: require("../assets/img/icon-4.png"),
          url1: require("../assets/img/icon-4-b.png"),
        },
        {
          name: "Telegram搜索引擎",
          url: require("../assets/img/icon-5.png"),
          url1: require("../assets/img/icon-5-b.png"),
        },
        {
          name: "博友社",
          url: require("../assets/img/icon-6.png"),
          url1: require("../assets/img/icon-6-b.png"),
        },
        {
          name: "菲阅不可",
          url: require("../assets/img/icon-7.png"),
          url1: require("../assets/img/icon-7-b.png"),
        },
        {
          name: "马尼拉酒吧广告赞助",
          url: require("../assets/img/icon-8.png"),
          url1: require("../assets/img/icon-8-b.png"),
        },
        {
          name: "马尼拉百辆巴士广告",
          url: require("../assets/img/icon-9.png"),
          url1: require("../assets/img/icon-9-b.png"),
        },
        {
          name: "纸飞机群组广告",
          url: require("../assets/img/icon-10.png"),
          url1: require("../assets/img/icon-10-b.png"),
        },
        {
          name: "线下推广展示",
          url: require("../assets/img/icon-11.png"),
          url1: require("../assets/img/icon-11-b.png"),
        },
      ],
      listIndex: 0,
    };
  },
};
</script>
<style lang="less" scoped>
.wrap {
  background: url(../assets/img/bg.7398f91.png);
  background-size: 100% 100%;
  .bg {
    width: 10rem;
    height: 7.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
  }
}

.wrap-one {
  padding: 0.53333rem 0.4rem 0;
  .con-main-wrap-one {
    margin-top: 0.32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    .img-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      img {
        width: 9.2rem;
      }
    }
    .con {
      flex: 1;
      height: 8rem;
      padding: 0.4rem;
      background: #fff;
      box-shadow: 0 0.05333rem 0.32rem 0 rgba(0, 0, 0, 0.09);
      border-radius: 0 0.10667rem 0.10667rem 0;
      p {
        font-size: 0.32rem;
        color: #656f81;
        line-height: 0.58667rem;
      }
    }
  }
}
.wrap-two {
  padding: 0.8rem 0;
  .con-main-wrap-two {
    margin-top: 0.4rem;
    .tab-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 0.66667rem 0;
      padding: 0 0.4rem 0.53333rem;
      border-bottom: 0.02667rem solid #d7dde9;
      .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 3.06667rem;
        height: 1.6rem;
        img {
          width: 2.13333rem;
        }
        p {
          margin-top: 0.16rem;
          font-size: 0.32rem;
          color: #656f81;
        }
      }
      .active {
        position: relative;
        p {
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #1064fb;
        }
      }
      .active::after {
        content: "";
        display: block;
        position: absolute;
        width: 0.8rem;
        height: 0.08rem;
        background: #2880ff;
        left: 50%;
        bottom: -0.26667rem;
        transform: translateX(-50%);
        border-radius: 0.26667rem;
      }
    }
  }
}
</style>
