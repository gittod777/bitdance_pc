<template>
  <div class="wrap">
    <div class="top-wrap wow bounceInUp">
      <h3>热门游戏</h3>
    </div>
    <div class="con-main-wrap">
      <ul class="center">
        <li
          class="sports"
          :class="{ activeWrap: bgIndex === index }"
          v-for="(item, index) in gameList"
          :key="item"
          @click="bgIndex = index"
        >
          <i
            alt=""
            class="icon"
            :class="[
              { sports: index === 0 },
              { live: index === 1 },
              { pvp: index === 2 },
              { elott: index === 3 },
              { esports: index === 4 },
              { rng: index === 5 },
            ]"
          ></i>
          <span class="na">{{ item }}</span>
        </li>
      </ul>
      <div class="content" style="height: 451px">
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 0 },
              { animationOut: bgIndex !== 0 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/sports.8eb0689.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 0 },
              { animationOut: bgIndex !== 0 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>体育赛事</h3>
              </div>
              <p class="desc1">SPORTS</p>
              <p class="desc_sml">
                提供接入多款体育竞技平台，
                每周至少有上千场的体育联合赛事供您的体彩迷投注，是您体育迷的最佳选择平台。强大的功能，易懂的界面，简单的操作平台，简明清晰联赛概览以满足不同玩家多样化的选择。
              </p>
            </div>
          </div>
        </div>
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 1 },
              { animationOut: bgIndex !== 1 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/live.ccfd724.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 1 },
              { animationOut: bgIndex !== 1 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>真人娱乐</h3>
              </div>
              <p class="desc1">LIVE CASINO</p>
              <p class="desc_sml">
                真人视讯给玩家带来前所未有的娱乐体验，是您提升业务的必备产品。以高规格打造的国际厅配备最先进的设备以及富丽堂皇的装潢，为玩家打造绝佳真人视讯游戏体验。游戏选择多样化，包括备受欢迎的百家乐丶骰宝丶轮盘等，加上全天侯监控管理，为玩家提供稳定而流畅的游戏服务。
              </p>
            </div>
          </div>
        </div>
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 2 },
              { animationOut: bgIndex !== 2 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/pvp.f4c7fb0.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 2 },
              { animationOut: bgIndex !== 2 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>棋牌游戏</h3>
              </div>
              <p class="desc1">BOARD GAMES</p>
              <p class="desc_sml">
                随着一系列资本的介入以及产品的爆发式增长，棋牌游戏成为了业内最为关注的话题之一。随着棋牌游戏的火速崛起，从休闲切换为真金白银的游戏模式，已经是市场不能缺的一部分。
              </p>
            </div>
          </div>
        </div>
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 3 },
              { animationOut: bgIndex !== 3 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/elott.8c02908.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 3 },
              { animationOut: bgIndex !== 3 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>彩票投注</h3>
              </div>
              <p class="desc1">LOTTERY GAMES</p>
              <p class="desc_sml">
                超过百种彩票玩法任您选择！为全球各彩票玩家提供了丰富多样的游戏内容，致力为玩家打造高品质的娱乐环境，安心乐享游戏空间，只为公平、公正的开奖结果。
              </p>
            </div>
          </div>
        </div>
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 4 },
              { animationOut: bgIndex !== 4 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/esports.56b07b1.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 4 },
              { animationOut: bgIndex !== 4 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>电子竞技</h3>
              </div>
              <p class="desc1">E-SPORTS</p>
              <p class="desc_sml">
                就是电子游戏比赛达到“竞技”层面的体育项目。电子竞技运动就是利用电子设备作为运动器械进行的、人与人之间的智力对抗运动。不仅可以锻炼和提高参与者的思维能力、反应能力、心眼四肢协调能力和意志力，培养团队精神。电子竞技也是一种职业，和棋艺等非电子游戏比赛类似。
              </p>
            </div>
          </div>
        </div>
        <div class="hot_games">
          <div
            class="leftWrap"
            :class="[
              { animationIn: bgIndex === 5 },
              { animationOut: bgIndex !== 5 },
            ]"
          >
            <div class="left_text">
              <img src="../assets/img/rng.2ec7d8c.png" alt="" />
            </div>
          </div>
          <div
            class="rightWrap"
            :class="[
              { animationIn: bgIndex === 5 },
              { animationOut: bgIndex !== 5 },
            ]"
          >
            <div class="right_text">
              <div class="title">
                <h3>电子游艺</h3>
              </div>
              <p class="desc1">SLOT GAMES</p>
              <p class="desc_sml">
                在线老虎机游戏仍然是网上博彩最流行的方式。无数的赌博者热爱老虎机游戏，上百种老虎机游戏供君挑选。它也是游戏厅最常见、同时也是最容易的游戏之一。通过经典游戏和先进老虎机等多种选择，玩家有机会抱得大奖归。不同的老虎机游戏类型，规则也相对不同。玩家可以自学并且享受此类型的游戏所带来的乐趣。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "API-view",
  data() {
    return {
      bgIndex: 0,
      APIIndex: 1,
      gameList: ["体育", "真人", "棋牌", "彩票", "电竞", "电子"],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrap {
  padding-top: 0.26042rem;
  padding-bottom: 0.36458rem;
  background-size: 100% 100%;
  background: #f3f8fd;
}
.top-wrap {
  width: 6.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 0.19792rem;
    font-weight: 600;
    color: #333;
  }
  h5 {
    margin-top: 0.03125rem;
    font-size: 0.10417rem;
    font-weight: 400;
    color: #4a5871;
    line-height: 0.15625rem;
  }
}
.con-main-wrap {
  margin-top: 0.20833rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  margin: 0 auto;
  ul {
    display: flex;
    margin-top: 26px;
    font-size: 16px;
    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 50px;
      line-height: 50px;
      margin-left: 12px;
      text-align: center;
      border-radius: 0 0 14px 14px;
      box-shadow: 0 6px 10px 0 rgba(184, 208, 255, 0.3);
      cursor: pointer;
      font-size: 18px;
      color: #67718f;
      background-image: url(data:image/png;base64,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);
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .icon {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 14px;
        background-image: url(../assets/img/bsprite.a942280.png);
        background-position: -152px 0;
        background-repeat: no-repeat;
        background-size: 606px 44px;
      }
      .sports {
        background-position: -456px 0;
      }
      .live {
        background-position: -152px 0;
      }
      .pvp {
        background-position: -76px 0;
      }
      .elott {
        background-position: -304px 0;
      }
      .esports {
        background-position: -228px 0;
      }
      .rng {
        background-position: -380px 0;
      }
      .na {
        max-width: 54%;
        max-height: 38px;
        word-break: break-all;
        overflow: hidden;
        line-height: 20px;
      }

      span {
        position: relative;
      }
    }
    li:before {
      content: "";
      z-index: -1;
      top: 0;
      display: block;
      width: 180px;
      height: 66px;
      position: absolute;
      left: 50%;
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
      transition: all 0.2s;
      background-image: url(../assets/img/btnbg2.35ebae2.png);
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .activeWrap {
      color: #fff;
      .icon {
        width: 44px;
        height: 44px;
        margin-right: 10px;
        position: relative;
        top: 5px;
      }
      .sports {
        background-position: -486px 0;
      }
      .live {
        background-position: -182px 0;
      }
      .pvp {
        background-position: -106px 0;
      }
      .elott {
        background-position: -334px 0;
      }
      .esports {
        background-position: -258px 0;
      }
      .rng {
        background-position: -410px 0;
      }
    }
    .activeWrap::before {
      z-index: 0;
    }
  }
  .center {
    justify-content: center;
  }
  .content {
    position: relative;
    min-height: 520px;
    width: 1200px;
    .hot_games {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 100%;
      height: 100%;
      .leftWrap {
        position: relative;
        left: 0;
        margin-top: 68px;
        .left_text {
          position: relative;
          top: -50px;
          z-index: 1;
          img {
            width: 600px;
            height: 496px;
          }
        }
      }
      .leftWrap.animationIn {
        -webkit-animation: fadeInLeft-5a1a3b36 0.7s ease-in forwards;
        animation: fadeInLeft-5a1a3b36 0.7s ease-in forwards;
      }
      .leftWrap.animationOut {
        -webkit-animation: fadeOutLeft-5a1a3b36 0.5s ease-in forwards;
        animation: fadeOutLeft-5a1a3b36 0.5s ease-in forwards;
      }
      .rightWrap {
        position: relative;
        z-index: 1;
        width: 542px;
        margin-top: 94px;
        .right_text {
          width: 100%;
          .title {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            h3 {
              font-size: 60px;
              font-weight: 700;
              color: #6a7391;
            }
          }
          .desc1 {
            margin-top: 10px;
            font-size: 70px;
            color: rgb(43, 107, 173);
            font-weight: 700;
            white-space: nowrap;
            opacity: 0.5;
          }
          .desc_sml {
            line-height: 1.6;
            margin-top: 15px;
            font-size: 14px;
            color: #6a7391;
            letter-spacing: -0.47px;
          }
        }
      }
      .rightWrap.animationIn {
        position: relative;
        z-index: 10 !important;
        -webkit-animation: fadeInRight-5a1a3b36 0.7s ease-in forwards;
        animation: fadeInRight-5a1a3b36 0.7s ease-in forwards;
      }
      .rightWrap.animationOut {
        z-index: -1 !important;
        -webkit-animation: fadeOutRight-5a1a3b36 0.5s ease-in forwards;
        animation: fadeOutRight-5a1a3b36 0.5s ease-in forwards;
      }
    }
  }

  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
  }
}
@keyframes fadeOutRight-5a1a3b36 {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }
}
@keyframes fadeOutLeft-5a1a3b36 {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0);
  }
}
@keyframes fadeInLeft-5a1a3b36 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100px, 0, 0);
    transform: translate3d(-100px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
@keyframes fadeInRight-5a1a3b36 {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100px, 0, 0);
    transform: translate3d(100px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>
