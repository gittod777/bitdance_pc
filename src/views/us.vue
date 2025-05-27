<template>
  <div class="cooperate-wrap-one">
    <div class="top-wrap wow bounceInUp">
      <h3>商务经理</h3>
    </div>
    <div class="con-main-wrap">
      <div class="us-item">
        <img src="../assets/img/us.png" alt="" />
        <div class="name">知乐</div>
        <span>商务经理</span>
        <div class="us-list">
          <div class="us-btn one" @click="open('https://t.me/lwgaming')">
            <!-- <div class="img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAeFBMVEUAAADY5v/d6f/Z5f/Z5v/Z5v/d5v/a5v/Z5v/Z5v/Z5v/Z5v/Z5v/Y5v/Z5v/Z5v/Z5v/Z5//b6f/Y5v/Z5v/Z5f/Z5v/Z5v/Z5//Z5v/Z5v/Z5//Z5v/Z5//Z5f/Z5v/Z5v/Z5v/Z5//Z5//Z5v/Z5f/Y5f/Y5f/UdbAdAAAAJ3RSTlMA9hIEveALWOnXsHg7KvGBa0wajWExpYYf7KtxZlIktp6ZkkXNyMVLBidAAAACNElEQVRIx+2V27qqIBSFUTBN85haqR1Xxfu/4Z4IBEhJdbfXt8aVzhp+c/4MAP3p1yot+tV3ThzeKIhUn1v9JKBcy8Wn/Z49+lD+Ub8lEba47OEjwfvWRS/6zdZbeG3hCb9pPVwyMWnBR12/bf6JKRcpZYnAd97pd1hyp3dOVRUaaZ3W7WbHrUHi62NAJXFYVx3luoXmgCHUfmaXpr6KflsjjJKX/9pa5RG37jZPgkjmlrlpPbE0w0KhUw0AiPhV9O8ySvpcZUAbBy8V/exy0MfooA1f41XORD/ojV0zZBCRB6IN/MEi8Yg+2WPjk2yOE9Z5RdPoyyidGpNB7skdqHgdzUCIpYlyf5IU9k2v1mMHhQ3SxTFdQzzhdxqbMfDsobJHuiios6IUjv3sZF3xOlhmUpgtb4+cfGrlKzMrfGTdjxOPp2wrK4oXQVYvhr+5ih2lulG81pNaTajmTy/yUYTF5BXayRyOHp0oZvTtHtOnya5j5eexsgQUPfzq0Ao77lejWWjv6LVC02vzuszdSMIsWNm8ajQjAf7pbzn80MyZE2V28bKV6mbf4nW1HfYeE20S3V6xBZw383zJIzrQZizhvXDcbdJ85odLbfBaOa43bzTjlgqdJaPYWkJb462Kx7sqqdmX7pXk5b5cB2Ybl3uA3cn4RSvBy325+pk4SsPxLWaPvUhugVyqubfUY9P6RTaeX07tlzTrUsU/Ulvtc1U33kuOvhFmV2DcoG/lY/Sn/1X/AF8MWn1NK4VrAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            telegram -->
          </div>
        </div>
        <a href="skype:live:.cid.cf3ce1ea1ad58666?chat">
          <div class="us-list">
            <div class="us-btn two"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cooperateView",
  components: {},
  data() {
    return {};
  },
  methods: {
    open(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="less" scoped>
.cooperate-wrap-one {
  padding-top: 1.89333rem;
  padding-bottom: 3.4rem;
  .con-main-wrap {
    width: 6.25rem;
    margin: 0 auto;
    min-height: 2.3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    .us-item {
      width: 272px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 200px;
        height: 200px;
        display: block;
      }
      .name {
        font-size: 24px;
        margin-bottom: 14px;

        color: rgb(60, 123, 246);
      }
      span {
        color: rgb(94, 94, 94);
        font-size: 14px;
        margin-bottom: 24px;
      }
      .us-list {
        display: flex;
        justify-content: center;
        .us-tg {
          background: rgb(60, 123, 246);
          width: 188px;
          height: 40px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          padding: 0 10px;
          font-size: 14px;
          img {
            width: 0.15625rem;
            height: 0.15625rem;
            margin-right: 5px;
          }
        }
      }
      .us-btn {
        width: 160px;
        height: 40px;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        text-transform: uppercase;
        cursor: pointer;
        font-weight: 600;
        color: rgb(60, 123, 246);
        .img {
          width: 0.2rem;
          height: 0.2rem;
          border-radius: 8px;
          display: flex;
          background: rgb(60, 123, 246);
          align-items: center;
          justify-content: center;
          margin-right: 10px;
          img {
            width: 0.15625rem;
            height: 0.15625rem;
          }
        }
        .us-val {
          text-align: center;
        }
      }
      .one {
        background: url("../assets/img/telegram.png") no-repeat;
        background-size: 100% 100%;
      }
      .one:hover {
        background: url("../assets/img/telegram-touch.png") no-repeat;
        background-size: 100% 100%;
      }
      .two {
        background: url("../assets/img/skype.png") no-repeat;
        background-size: 100% 100%;
      }
      .two:hover {
        background: url("../assets/img/skype-touch.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
