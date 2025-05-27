<template>
  <div class="wrap">
    <div class="top-wrap wow bounceInUp">
      <h3>
        {{ typeIndex === "1" ? "集团产品已服务上千+客户" : "优秀合作伙伴" }}
      </h3>
    </div>
    <div class="example-wrap" v-if="typeIndex === '1'">
      <div class="item wow rollIn">
        <img src="../assets/img/1.a1682d2.png" alt="" class="height46" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/2.1bb0e0d.png" alt="" class="height63" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/3.7fd18b1.png" alt="" class="height44" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/4.3bf94e0.png" alt="" class="height58" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/5.48d45d6.png" alt="" class="height57" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/6.90ff36c.png" alt="" class="height48" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/7.28f26d8.png" alt="" class="height57" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/8.9609ae2.png" alt="" class="height62" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/9.31d4427.png" alt="" class="height66" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/10.5fbaefa.png" alt="" class="height56" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/11.ec988e9.png" alt="" class="height50" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/12.765f232.png" alt="" class="height62" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/13.d285c1d.png" alt="" class="height38" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/14.2a18cb2.png" alt="" class="height58" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/15.84150af.png" alt="" class="height58" />
      </div>
    </div>
    <div class="example-wrap" v-else>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/1.a1682d2.png" alt="" class="height46" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/2.1bb0e0d.png" alt="" class="height63b" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/3.7fd18b1.png" alt="" class="height63b" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/4.3bf94e0.png" alt="" class="height58" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/5.48d45d6.png" alt="" class="height57" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/6.90ff36c.png" alt="" class="height48" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/7.28f26d8.png" alt="" class="height57" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/8.9609ae2.png" alt="" class="height62" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/9.31d4427.png" alt="" class="height66b" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/10.5fbaefa.png" alt="" class="height56" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/11.ec988e9.png" alt="" class="height50" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/12.765f232.png" alt="" class="height63b" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/13.d285c1d.png" alt="" class="height38" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/14.2a18cb2.png" alt="" class="height58" />
      </div>
      <div class="item wow rollIn">
        <img src="../assets/img/bf/15.84150af.png" alt="" class="height58" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "custom-view",
  props: {
    typeIndex: {
      default: "1",
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrap {
  padding: 0.64rem 0;
}

img {
  vertical-align: middle;
  border-style: none;
}
.example-wrap {
  margin-top: 0.53333rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-width: 0;
  gap: 0.26667rem;
  .item {
    width: 2.88rem;
    height: 1.14667rem;
    background: #fff;
    box-shadow: 0 0.05333rem 0.21333rem 0 rgba(0, 0, 0, 0.09);
    border-radius: 0.16rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      height: 0.64rem;
      max-width: 2.7rem;
    }
    .height66,
    .height63b {
      height: auto;
      width: 1.8rem;
    }
    .height66b {
      height: 0.6rem;
      width: auto;
    }
  }
}
</style>
