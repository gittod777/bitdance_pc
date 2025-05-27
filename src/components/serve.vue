<template>
  <div class="wrap">
    <div class="top-wrap wow bounceInUp">
      <h3>全方位的无忧专属服务</h3>
      <p>乐玩游戏以技术、服务、专业性稳居业内榜首</p>
    </div>
    <div class="con-main-wrap">
      <div class="list-wrap wow slideInLeft">
        <div class="list-item">
          <img src="../assets/img/img-1.705892e.png" alt="" />
          <p>精选优质服务商</p>
        </div>
        <div class="list-item">
          <img src="../assets/img/img-2.d67bb35.png" alt="" />
          <p>产品多元化</p>
        </div>
        <div class="list-item">
          <img src="../assets/img/img-3.2bae0af.png" alt="" />
          <p>技术团队实时配合</p>
        </div>
        <div class="list-item">
          <img src="../assets/img/img-4.a386b8a.png" alt="" />
          <p>7*24客服服务</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "serve-view",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrap {
  padding-top: 0.53333rem;
  padding-bottom: 0.8rem;
  background: url(../assets/img/bg.eb00787.png);
  background-size: 100% 100%;
  position: relative;
}
.con-main-wrap {
  margin-top: 0.53333rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .list-wrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .list-item {
      width: 40%;
      margin-bottom: 0.53333rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.16rem;
      img {
        width: 1.6rem;
        height: 1.6rem;
      }
      p {
        font-size: 0.37333rem;
        color: #1d2129;
      }
    }
  }
}
</style>
