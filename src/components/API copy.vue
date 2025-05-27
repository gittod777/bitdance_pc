<template>
  <div class="wrap" :class="[{ one: bgIndex === 0 }, { two: bgIndex === 1 }]">
    <div class="top-wrap wow bounceInUp">
      <h3>免费开放数据接口API</h3>
      <h5>
        提供赛事即时数据、全球200+欧赔公司数据，赛前分析数据，为行业用户提供数据服务支撑，提高产品市场竞争力
      </h5>
    </div>
    <div class="con-main-wrap">
      <div class="tab-wrap">
        <div
          class="tab-item"
          :class="{ active: bgIndex === 0 }"
          @click="bgIndex = 0"
        >
          <img src="../assets/img/game.0cc586e.png" alt="" />
          电竞数据
        </div>
        <div
          class="tab-item"
          :class="{ active: bgIndex === 1 }"
          @click="bgIndex = 1"
        >
          <img src="../assets/img/sport.30bc503.png" alt="" />
          体育数据
        </div>
      </div>
      <div class="left-wrap wow slideInLeft" v-show="bgIndex === 0">
        <h4>电竞数据</h4>
        <p>
          提供电竞赛事数据，数值数据，结算赛果数据，为电竞行业创业者提供产品的数据服务支撑，快速打开市场。
        </p>
        <div class="left-tip">
          <div class="tip-item">
            <img src="../assets/img/icon-1.cd26623.png" alt="" />
            <p>覆盖10余款主流电竞项目</p>
          </div>
          <div class="tip-item">
            <img src="../assets/img/icon-2.ea07b32.png" alt="" />
            <p>实时比分</p>
          </div>
          <div class="tip-item">
            <img src="../assets/img/icon-3.c87fb14.png" alt="" />
            <p>实时出场阵容</p>
          </div>
          <div class="tip-item">
            <img src="../assets/img/icon-4.2d2f723.png" alt="" />
            <p>未来赛事赛程</p>
          </div>
        </div>
        <div class="btn-list">
          <button type="button" class="btn ant-btn multi">
            <span>精准数据</span
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
            ></i></button
          ><button type="button" class="btn ant-btn ghost multi">
            <span>免费数据</span
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
      </div>
      <div class="left-wrap wow slideInLeft" v-show="bgIndex === 1">
        <h4>体育数据</h4>
        <p>
          提供全球各级联赛、杯赛比赛动画数据，包括实时比分、比赛状态、全、半场比分数据、赛事基础事件数据（加时信息、红黄牌、换人）以及开球、射门次数、控球率、角球次数、红黄牌次数、犯规次数、传球次数。
        </p>
        <div class="left-tip">
          <div class="tip-item">
            <img src="../assets/img/icon-5.e52ca37.png" alt="" />
            <p>高达47项数据统计</p>
          </div>
          <div class="tip-item">
            <img src="../assets/img/icon-6.6d7b4ee.png" alt="" />
            <p>24小时对赛及时更新</p>
          </div>
        </div>
        <div class="btn-list">
          <button
            type="button"
            class="btn ant-btn"
            ant-click-animating-without-extra-node="false"
          >
            <span>免费接入</span
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
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.ant-btn {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 0.00521rem solid transparent;
  box-shadow: 0 0.01042rem 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 0.16667rem;
  padding: 0 0.07813rem;
  font-size: 0.07292rem;
  border-radius: 0.02083rem;
  color: rgba(0, 0, 0, 0.65);
  background-color: #fff;
  border-color: #d9d9d9;
}
.ant-btn,
.ant-btn:active,
.ant-btn:focus {
  outline: 0;
}
.ant-btn > i,
.ant-btn > span {
  display: inline-block;
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  pointer-events: none;
}
.wrap {
  padding-top: 0.26042rem;
  padding-bottom: 0.36458rem;
  background-size: 100% 100%;
}
.one {
  background: url("../assets/img/bg-game.9d25342.png") no-repeat;
  background-size: 100% 100%;
}
.two {
  background: url("../assets/img/bg-sport.b0a767d.png") no-repeat;
  background-size: 100% 100%;
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
  .left-wrap {
    margin-top: 0.36458rem;
    position: relative;
    align-self: flex-end;
    width: 2.44792rem;
    .left-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-content: space-between;
      padding-left: 0.07813rem;
      width: 1.04167rem;
      height: 0.57292rem;
      background: linear-gradient(180deg, #edf6ff 2%, #fff 100%);
      box-shadow: 0 0.01042rem 0.03125rem 0 rgba(0, 89, 228, 0.02),
        0 0.01042rem 0 0 #eef7ff;
      border-radius: 0.02083rem;
      position: relative;
      padding-right: 0.41667rem;
      span {
        flex: 1;
        font-size: 0.08333rem;
        color: #1d2129;
      }
      img {
        width: 0.5625rem;
        height: 0.5625rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .active {
      background: linear-gradient(231deg, #188efe 1%, #0658ea 100%);
      box-shadow: 0 0.01042rem 0 0 rgba(238, 247, 255, 0.5);
      border-radius: 0.01042rem;
      border: 0.00521rem solid;
      -o-border-image: linear-gradient(230deg, #3e9ef7, #2878ff) 1 1;
      border-image: linear-gradient(230deg, #3e9ef7, #2878ff) 1 1;
      span {
        font-weight: 500;
        color: #fff;
      }
    }
    h4 {
      font-size: 0.15625rem;
      font-weight: 600;
      color: #333;
    }
    p {
      margin-top: 0.05208rem;
      font-size: 0.08333rem;
      font-weight: 400;
      color: #4a5871;
    }
    .left-tip {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      margin-top: 0.15625rem;
      gap: 0.10417rem;
      .tip-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: flex-start;
        gap: 0.04167rem;
        padding: 0 0.07813rem;
        width: 0.98958rem;
        height: 0.36458rem;
        text-align: left;
        background: linear-gradient(180deg, #edf6ff 2%, #fff 100%);
        box-shadow: 0 0.03125rem 0.11979rem 0 rgba(24, 57, 127, 0.21),
          0 0.00521rem 0 0 #fff;
        border-radius: 0.02083rem;
        img {
          width: 0.20833rem;
        }
        p {
          margin-top: 0;
          font-size: 0.07292rem;
          color: #4a5871;
        }
      }
    }
    .btn-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-content: flex-start;
      gap: 0.07813rem;
      .ant-btn {
        margin-top: 0.26042rem;
        width: 0.76042rem;
        height: 0.26042rem;
        background: linear-gradient(335deg, #0c5afc 0, #1c93fe 100%);
        box-shadow: 0 0.01042rem 0.0625rem 0 rgba(12, 90, 252, 0.28);
        border-radius: 0.02083rem;
        color: #fff;
        font-size: 0.08333rem;
      }
      .ghost {
        background: #f4f8ff;
        box-shadow: 0 0.01042rem 0.02083rem 0 rgba(12, 90, 252, 0.1);
        border: 0.00521rem solid #1b6cfe;
        color: #1d6ffe;
      }
    }
  }
  .tab-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 0.36458rem;
    background: #fff;
    border-radius: 0.04167rem;
    padding: 0.02604rem;
    .tab-item {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.05208rem;
      height: 100%;
      background: #fff;
      font-size: 0.13542rem;
      font-weight: 400;
      color: #4a5871;
      border-radius: 0.03125rem;
      cursor: pointer;
      img {
        width: 0.3125rem;
        height: 0.3125rem;
      }
    }
    .active {
      background: #eff7ff;
      border-radius: 0.04167rem;
    }
  }
  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
  }
}
</style>
