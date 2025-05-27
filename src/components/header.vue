<template>
  <div class="wrap" id="shadow-wrap" :class="{ headerChange: showbg }">
    <div class="main-wrap">
      <div class="left" @click="$router.push('/')">
        <img src="../assets/img/home/logo.png" alt="" class="logo" />
      </div>
      <div class="right">
        <i
          class="van-icon van-icon-wap-nav"
          style="font-size: 22px"
          @click="show = true"
        ></i>
      </div>
    </div>
  </div>
  <van-overlay :show="show" @click.stop="show = false">
    <van-popup
      v-model:show="show"
      position="left"
      :style="{ width: '100%', height: '100%' }"
    >
      <div class="popup-wrap">
        <div class="popup-header" @click="$router.push('/')">
          <img src="../assets/img/home/logo.png" alt="" class="logo" />
          <i class="van-icon van-icon-cross" @click="show = false"></i>
        </div>
        <div class="popup-list">
          <div class="popup-list-left">
            <div class="popup-list-item" @click="$router.push('/')">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAbFBMVEUAAAAhISEjIyMiIiIiIiIhISEiIiIhISEhISEhISEhISEhISEiIiIiIiIiIiIhISEhISEhISEhISEdHR0cHBwhISEiIiIiIiIiIiIiIiIiIiIiIiIhISEjIyMhISEjIyMkJCQiIiIgICAiIiJYaJgsAAAAI3RSTlMA8lYl+aeS7q4W5tA7D8B0ZDMhCgbd1cq2nI6Ee25qQCqGSB1zgYsAAADQSURBVDjL1ZHJEoMgEERFUHDfE6NxSeb//zEDmrKsgFziwT41w2NqenDOU9B3pY3JOQB71kfInILSLTYi1Ysh0Nwl9kj0zLvBS9bXzkDQhK5uYA9Q6ay8kL79CTByLPP8e3RDPJJshxTLHMFWSXxZiYpt4I7JRJOzfxhJzK/WRxHod5MR2WyJKRunVJe3bGUvZXHG0fgBuAtlkDYx6vIiUOBndsgHmKyQB+BeEhqAUfsyY3rutxCA2MTEAEQZAYcSCqL8iOFrDiqICSECmT/qA/csKYiRvdoUAAAAAElFTkSuQmCC"
                    class="menu-icon"
                  />
                  <h4>首页</h4>
                </div>
              </div>
            </div>
            <div class="popup-list-item show">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAZlBMVEUAAAAPZPwJaP8QZPwQZPsOY/sMZf8OZP8QZPwQZPwPZPwPY/wQZPwQZPsPZPwPZPwQZPwPZP0QZPwPZPwQZPwPZPwQZP0PZP0QZfwQZPwQZPwRY/0QZPwQY/sQZP0QZfwNZfwQZPs/ZJuwAAAAIXRSTlMA+Aa/QDETDM7rUOLxsKbanXPTxY+BbGVhXEkdtnwtWCf96hkRAAABPklEQVQ4y92S25KDIBBEuSlGCMYkJsZc+/9/coEBLxVTtVu1TzkPFtP0gDrN/hVx2kri1uqkXVt3c+119OgDJpoyth05AvwoGHHEHLdsO6SjDdAp4gRwrzgAsh96SU0BDgiW2AAlUwBOsfRNUOsmB+xSvfPLdZMBHql+AGbdxMFZBuCfTNCp1oBdN1VAneonUK2bOqDRdFAD3OPKhg1C2HBT6Z9VePWiAizZD75xS+zpY2p49jdfjRcPmHMOUs9B8AtL9BYZ3pL0cjxU7sVGtKoJpSetGArN/oi+y4qQXRmFbhTuOnn2mDA+jGWzTOF76LZh9HN2OXRtQVwAHv/uOQnnT7MTafLj5vebLHDNA4rx9qY82jI3SMBIwgANY9VCoIwrjhlPCubEwCK1QcbGYF42yGzGaIpCEYV4F37LD6sTNoflBDZuAAAAAElFTkSuQmCC"
                    class="menu-icon"
                  />
                  <h4>产品</h4>
                </div>
              </div>
            </div>
            <div class="popup-list-item" @click="$router.push('/cooperate')">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAY1BMVEUAAAAiIiIhISEhISEhISEhISEiIiIiIiIhISEiIiIiIiIhISEcHBwiIiIiIiIiIiIiIiIiIiIhISEhISEiIiIiIiIiIiIiIiIiIiIiIiIgICAiIiIiIiIkJCQiIiIjIyMiIiKqPeEiAAAAIHRSTlMA+SX0PEWVrOWL4jIIt6R3TNRs7L2xm4FjVw3azRTDHbuDlkcAAAErSURBVDjLzdHpboMwDABgNxwZJOE+Ci2r3/8pZ+NFQUVk0n7VP3J+OEaGjwgz62HMl/XtWGWZsSCRPVEimQ9MTf1+Nma8KzBEq7wpbujDbXZkPi1ZU7e06kWtA9+Wg2v32dGgN/n6nlCuvQjNCQyvXrmkLMIPkKpZo8xSMqvK7+S2t2BL+fKgbulBPRAbaKgMC9dq5hwT4gxwrRZ+/hsxhYiil0Z+U0FEdYgTUAcMRJRG7Hi4w7VStFKcboBLZalkB/CibXOpNI1cTS5NDGG7xSuHXBHFViJ+HVUtLWAV+mgSUQHJVcMm96fpm9KiKpo0bc+qeqa/ypuzShGTTJR/66zW0qtgzkqJqsRElRMTV2Ki6iYmpnw9MZU8xMSVmFiYlnLV8FcoY+Ff8QMmWSY7xH24UgAAAABJRU5ErkJggg=="
                    class="menu-icon"
                  />
                  <h4>合作共赢</h4>
                </div>
              </div>
            </div>
            <div class="popup-list-item" @click="$router.push('/hatch')">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAUVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcqRVCAAAAGnRSTlMABA7YUPPpuoXcrKSKf1Uv7Z5vHbJhPDQkG7Ia+ooAAADTSURBVDjL7dDZasMwFEXRo8lDHI8Zu///Q+vWqSUToT4Xuh8PCy5cZTND5wJ7WeNbgDI6QwFFU/Wj1VYWeeD0JQrItKuRjoifJjd7Iw1Q2cRYCCLNeXXQK2kEJ441DsYU9dAJMN/ZRzNt8HCtgkHpaK9vbzlBa7TKZ9yuR2RXg5dquCXrFJEd+wo4S1qgVqwh7WV0Ae4RPTjU+m2ewdl4j73gusG85o8A9a4MoEwecPdfkBaA+vY0JSQfSFO+y1xCkS11taNiZm1Hpf7R30VNaN62TxGTIJg8H0VpAAAAAElFTkSuQmCC"
                    class="menu-icon"
                  />
                  <h4>孵化中心</h4>
                </div>
              </div>
            </div>
            <div class="popup-list-item" @click="$router.push('/brand')">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAbFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0Iv+qAAAAI3RSTlMA9nBmCO4XQw+W+sjCh9vPdx7iqaKPUSsn5sybaUo2WD26sSU3AWAAAAFPSURBVDjLrdEPb/IgEMfxH7VQWq31T2vVOXX7vv/3+IBomyzjWZbsk5AQjtwdh746rtejfnKGs35QEBT6wh+cZltDYLaauZvXEnvV5BP2e/jU5GpZyoA56OkA1jkL80mMx0ZpLs/SOwjbBey85hbP6olaRTUhdbCCWtFA1GsDJ2BfhvINzahgDJurVO6BkHyjd6jDRVZe3SujWujkV4QLIfu7tiGuWwPrIaxSD+UahrDMLZbeShYrVZao0lNFZO/PsJbgpHEXG9Okj+2MkktveUsJXId1mjhL51LKtzSKQoFvK2lWtV5zNN3NSXVS1ZzUcWAxyjJYBWkSGY8pRo+ZZsT/UHSJv5OxgYuiO/TK6OGuyEOnjA68Hk6Y/ONOSj7gqG8d4UPJAHXxrRoGJQv+YzEnzZobqRZZlX6pzNGkbcip9XIiq9FLYU2GbfWn/gEgDzCF1EK7PAAAAABJRU5ErkJggg=="
                    class="menu-icon"
                  />
                  <h4>品牌战略</h4>
                </div>
              </div>
            </div>
            <div class="popup-list-item" @click="$router.push('/us')">
              <div class="item-wrap">
                <div class="menu-left">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAclBMVEUAAAAiIiIhISEiIiIhISEhISEgICAgICAiIiIiIiIcHBwhISEiIiIhISEhISEiIiIhISEiIiIiIiIiIiIhISEhISEfHx8iIiIiIiIlJSUhISEiIiIhISEhISEhISEhISEiIiIhISEhISEiIiIiIiIiIiIOy+8LAAAAJXRSTlMAq1T2td4jFqZcCu/qyJyQMx1/a1A8EM2EBte7lXhxZUPBoePEmkvw1gAAAYFJREFUOMu1U8tygzAMhGAwb0x4p5SQJvv/v1gbV1bc4dJD97T2rFcaaR38B2Tfdb20PNuy9kSiRASDx2A0hk39b80Mh8aKNMLc09QAose6fhi7UKuaw7h6V90BiORoLNT007Bx1SxlTV4CNR0a7Snd0+HdKF7cadJWrgnhrgXQse8FqCxrtelI1zGQsEgChTPlegUwBowI+GEhcDl3GtlJGBHzO4t6oOLXiq474MaiCrhaNgDR4goUQEOHKxDZ5S5a/mWIs0IqD30NMlpSLU8Chj4jEvMcRqAByokW5LDCoVqoLEovVNkTjNcxwN2YFjtPRsAgfoiqBKip5MgPJa+9AXhu1lo1kYuIirVK2aCYDmeOVytAE5E3mmDKphwpZAdLChuQgW78iZTWegNiswWXSkYeu4mWwB4oSquHTFu50nMw0358lBS3i9nAiyLjo6aVKGAyT5ITUUcFEtM5AB6RlzzhiS4nuAIfnugUJMoLTQqcgr+42mSwp+E56jb4E74BDZo3Bd0Y2foAAAAASUVORK5CYII="
                    class="menu-icon"
                  />
                  <h4>关于我们</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="popup-list-right">
            <div class="item-con product">
              <div class="item-list-item" @click="$router.push('/web')">
                <img src="../assets/img/web.09e2fba.png" alt="" />
                <div class="text-con">
                  <h4>乐玩包网</h4>
                  <p>提供丰富多彩模版</p>
                </div>
              </div>
              <div class="item-list-item" @click="$router.push('/color')">
                <img
                  src="https://m.acb.bet/_nuxt/img/color.0c1c67a.png"
                  alt=""
                />
                <div class="text-con">
                  <h4>综合色站</h4>
                  <p>一站式拥有AV/漫画/色播</p>
                </div>
              </div>
              <div class="item-list-item" @click="$router.push('/sport')">
                <img
                  src="https://m.acb.bet/_nuxt/img/sport.11c071b.png"
                  alt=""
                />
                <div class="text-con">
                  <h4>体育直播</h4>
                  <p>体育赛事直播服务平台</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </van-overlay>
</template>
<script>
export default {
  name: "header-view",
  components: {},

  data() {
    return {
      showbg: false,
      show: false,
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        this.$nextTick(() => {
          var scrollTop =
            window.pageYOffset || //用于FF
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
          let domH = document.querySelector("#shadow-wrap").clientHeight;
          if (scrollTop > domH) {
            this.showbg = true;
          } else {
            this.showbg = false;
          }
        });
      },
      true
    );
  },
  methods: {},
};
</script>
<style>
.van-overlay {
  z-index: 4 !important;
}
</style>
<style lang="less" scoped>
.popup-wrap {
  .popup-header {
    padding: 0 0.4rem;
    height: 1.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    border-bottom: 0.02667rem solid #d7dde9;
    img {
      width: 2.93333rem;
      height: 0.88rem;
    }
  }
  .popup-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-items: stretch;
    .popup-list-left {
      width: 3.73333rem;
      min-height: calc(100vh - 1.6rem);
      padding-top: 0.26667rem;
      border-right: 0.02667rem solid #d7dde9;
      .popup-list-item {
        padding: 0 0.4rem;
        .item-wrap {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          justify-content: space-between;
          height: 1.6rem;
          .menu-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            img {
              width: 0.48rem;
              margin-right: 0.4rem;
            }
            h4 {
              font-size: 0.42667rem;
              font-weight: 500;
              color: #000;
            }
          }
        }
      }
    }
    .popup-list-right {
      flex: 1;
      .item-con {
        padding-top: 0.13333rem;
        .item-list-item {
          padding: 0.26667rem 0.4rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          justify-content: flex-start;
          padding: 0.4rem;
          gap: 0.26667rem;
          img {
            width: 0.8rem;
          }
          .text-con {
            h4 {
              font-size: 0.37333rem;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #1d2129;
            }
            p {
              font-size: 0.32rem;
              color: #656f81;
            }
          }
        }
      }
    }
  }
}
.wrap {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
}
.wrap.headerChange {
  background: #fff;
  box-shadow: 0 0.16rem 0.61333rem 0 rgba(16, 40, 90, 0.1);
  border-bottom: 0.02667rem solid #d7dde9;
}
.main-wrap {
  height: 1.6rem;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  .left {
    width: 4rem;
    img {
      width: 2.93333rem;
      height: 0.88rem;
    }
  }
  .right {
    width: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
  }
}
</style>
