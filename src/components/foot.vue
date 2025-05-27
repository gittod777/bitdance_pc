<template>
  <div class="wrap">
    <!-- <div class="top-wrap">
      <div class="main-wrap">
        <img src="../assets/img/contact.b17da71.png" alt="" class="contact" />
        <div class="top-right-list">
          <div class="item">
            <img src="../assets/img/skype.3ee689b.png" alt="" />
            <p>Skype: AceBet</p>
          </div>
          <div class="item">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAeFBMVEUAAADY5v/d6f/Z5f/Z5v/Z5v/d5v/a5v/Z5v/Z5v/Z5v/Z5v/Z5v/Y5v/Z5v/Z5v/Z5v/Z5//b6f/Y5v/Z5v/Z5f/Z5v/Z5v/Z5//Z5v/Z5v/Z5//Z5v/Z5//Z5f/Z5v/Z5v/Z5v/Z5//Z5//Z5v/Z5f/Y5f/Y5f/UdbAdAAAAJ3RSTlMA9hIEveALWOnXsHg7KvGBa0wajWExpYYf7KtxZlIktp6ZkkXNyMVLBidAAAACNElEQVRIx+2V27qqIBSFUTBN85haqR1Xxfu/4Z4IBEhJdbfXt8aVzhp+c/4MAP3p1yot+tV3ThzeKIhUn1v9JKBcy8Wn/Z49+lD+Ub8lEba47OEjwfvWRS/6zdZbeG3hCb9pPVwyMWnBR12/bf6JKRcpZYnAd97pd1hyp3dOVRUaaZ3W7WbHrUHi62NAJXFYVx3luoXmgCHUfmaXpr6KflsjjJKX/9pa5RG37jZPgkjmlrlpPbE0w0KhUw0AiPhV9O8ySvpcZUAbBy8V/exy0MfooA1f41XORD/ojV0zZBCRB6IN/MEi8Yg+2WPjk2yOE9Z5RdPoyyidGpNB7skdqHgdzUCIpYlyf5IU9k2v1mMHhQ3SxTFdQzzhdxqbMfDsobJHuiios6IUjv3sZF3xOlhmUpgtb4+cfGrlKzMrfGTdjxOPp2wrK4oXQVYvhr+5ih2lulG81pNaTajmTy/yUYTF5BXayRyOHp0oZvTtHtOnya5j5eexsgQUPfzq0Ao77lejWWjv6LVC02vzuszdSMIsWNm8ajQjAf7pbzn80MyZE2V28bKV6mbf4nW1HfYeE20S3V6xBZw383zJIzrQZizhvXDcbdJ85odLbfBaOa43bzTjlgqdJaPYWkJb462Kx7sqqdmX7pXk5b5cB2Ybl3uA3cn4RSvBy325+pk4SsPxLWaPvUhugVyqubfUY9P6RTaeX07tlzTrUsU/Ulvtc1U33kuOvhFmV2DcoG/lY/Sn/1X/AF8MWn1NK4VrAAAAAElFTkSuQmCC"
              alt=""
            />
            <p>Telegram: AceBet</p>
          </div>
          <div class="item">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAclBMVEUAAADa7P/Y5v/Z5f/Z5v/Y5//Z5v/a5//Z5v/Z5v/Z5v/a5//b5//Z6f/Z5//Y5v/Z5v/Z5v/Z5f/Z5v/Z5v/Z5v/Z5v/Z5v/Y5f/Z5v/Z5v/Z5v/Z5v/Z5v/Z5//Z5v/Z5v/Z5v/Z5v/b6P/Z5v/Y5f+p/Jh4AAAAJXRSTlMAB/PusBeiNMWpkj4mEA3ghOnR5NuKmUX3ti5p1b1wXld7ZU1zoyhdJgAAAtxJREFUSMeVVtm2gyAMBNyqKC61WmtrV///Fy+kWBQRvPPg8QiDQ5IhoA1EfdJVdVnWVZf0EdoP/PC9cQEvfuBd1LSRTI2fpG5qPJufV1U+Wym009lJzivjV5QhQBb1cTkCzoVFPD3CHBK2+kgbnmEop1vc4iu2CEyDwYnA8NMcYx8GG6Aa6SFMiA3Ss4MYqa0ppbmYc2Or/wI3ZsiKzAe2/m/4ekJOJPAPQ6w+aAeeq6i14kvhJKp/zzLGjqDFCbXDHC8Wq9lecpbPw3MRQv5hOyoqNZ3paGbF4J+JPd+hcIk0kqjJTKm6CiG+jRyISk1/6xTzeAACG1uYL4FQ82VIttiQM+nBmYsVAb+rDUgdgAq5dv0AmYucH0eJi43cfsOCuerjzCBAdBd6yXV/9xiayAcrOYbSGPjzvlhSYrCSez6jRw1sT8uUu9QjSNaNP+fmfknR2FHgfE6HaoiXAvaA/EAO8GmVSM1VdzvkwYGc+xIRPa64BnbrIFe8M6DzKiktkPPMSfZAu+mgGTu3bBUwBVwBO3QHTJzXq1ZJtN7wjsypCsHXGt4y2XJg4K+tqUiexqQ+v2wyqKUOFGm11ENsE+PpDLi+ESXy3Q+Who5A/BWt0YwS+fhDpVsSIpaau7WC7lIqi/CzZfy3p5MTpVoaORBXEGzp5gp0fvYSPDm433CtP+fGiy01P/0l27yVkXF1Fco8Faeb9bjDd3GTuhbBMhPx7kbHsF5dKkEN5HAvWL0IfOBpzcl56h6ZIotC2ssttHPmpSLmxEe/vtz23wwK/XTcr5qFqzO9/6lO76m1TdTAzdBadXQSYye22SSSr6sx0lXTZGrM5YCN1MIbDVe9YdTgnVaNncoSL/VecJi5PZYvdfKYdo8v93BSlWS6ayfXdK+Ab7xTSx2rw+EqeBL+ZR1+IYjEDzbZJB5NICFQdVC/eS8j+OrOGrO7M7QbjA4hl0xIWd+aD8XIiD+5nIOLEo1ybQAAAABJRU5ErkJggg=="
              alt=""
            />
            <p>WhatApp: AceBet</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="center-wrap">
      <h4>产品</h4>
      <div class="list-wrap">
        <div class="item" @click="$router.push('/sport')">体育直播</div>
        <div class="item" @click="$router.push('/color')">综合色站</div>
        <div class="item" @click="$router.push('/web')">综合包网</div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2000 - 2022 LeWan Group. All Rights Reserved.</p>
      <p>乐玩游戏 版权所有</p>
    </div>
    <img src="../assets/img/logo-grey.4072531.png" class="logo" alt="" />
  </div>
</template>
<script>
export default {
  name: "foot-view",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.wrap {
  background: #15223c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.top-wrap {
  width: 6.25rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url(../assets/img/top-bg.4ac46bf.png);
  background-size: 100% 100%;
  .main-wrap {
    width: 6.25rem;
    height: 0.52083rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
    position: relative;
    .contact {
      width: 1.125rem;
      height: 0.71354rem;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    .top-right-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.36458rem;
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.05208rem;
        cursor: pointer;
        img {
          width: 0.15625rem;
          height: 0.15625rem;
        }
        p {
          font-size: 0.10417rem;
          color: #fff;
        }
      }
    }
  }
  h3 {
    font-size: 0.19792rem;
    font-weight: 600;
    color: #333;
  }
}
.center-wrap {
  width: 100%;
  padding: 0.53333rem;
  h4 {
    font-size: 0.42667rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    text-align: center;
  }

  .list-wrap {
    margin-top: 0.37333rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // justify-content: flex-start;
    gap: 0.53333rem;
    flex-wrap: wrap;
    .item {
      min-width: 1.6rem;
      font-size: 0.37333rem;
      color: #656f81;
    }
  }
}
.copyright {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.6rem;
  border-top: 0.02667rem solid #465471;
  font-size: 0.32rem;
  color: #656f81;
  text-align: center;
  padding: 0 0.4rem;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.logo {
  margin-bottom: 0.53333rem;
  width: 3.2rem;
}
</style>
