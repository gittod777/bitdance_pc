<template>
  <div class="wrap">
    <div class="bg">
      <div class="item-con">
        <h3>乐玩游戏包网</h3>
        <h5>
          提供丰富多彩模版和稳定、安全、可靠的网站建设服务，致力打造行业标杆
        </h5>
      </div>
    </div>
  </div>
  <div class="wrap demo-wrap">
    <van-tabs v-model:active="activeKey">
      <van-tab title="全部">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in allList"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="AG系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list1"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="亚博系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="体育系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list2"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="品牌系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list3"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="澳门系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list4"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="电竞系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list5"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
      <van-tab title="老虎机系">
        <div class="tab-con">
          <div class="list-wrap">
            <div
              class="list-item"
              v-for="item in list6"
              :key="item.name"
              @click="handleSelect(item)"
            >
              <div class="img-wrap">
                <img :src="item.imgUrl" alt="" class="img-con" />
              </div>
              <div class="tip-wrap">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div></van-tab
      >
    </van-tabs>
  </div>
  <van-image-preview v-model:show="visible" :images="selectImgs">
    <template v-slot:cover>
      <div class="btn-wrap">
        <van-popover
          v-model:show="showPopover"
          placement="top"
          @select="onSelect"
        >
          <div class="client-wrap">
            <div
              class="client-item"
              :class="{ active: liIndex === '1' }"
              @click="select('1')"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOBAMAAADUAYG5AAAAIVBMVEUAAABJWHBLVnJIV29KWHFKWHBKV3BKWHFKVW5KU29KWHF8jjHLAAAACnRSTlMAw0FVsIPh10gb3nzzuAAAADRJREFUCNdjkFoFBgsZFjCAAReljEVKYKDFECgoKJYoKCgKEmYNgEi3uJd4gBmTjY0tGRgAgv0Pz/PTqBMAAAAASUVORK5CYII="
                alt=""
              />
              <p>电脑端</p>
              <i class="van-icon van-icon-arrow"></i>
            </div>
            <div
              class="client-item"
              :class="{ active: liIndex === '2' }"
              @click="select('2')"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASBAMAAAByRUkBAAAAJFBMVEUAAABKWHFJV3FKWHFJWHBLWHJIV3BKWHFKWHFJV3FJWHFLWHBDnCfPAAAADHRSTlMAgmnr9BMv3/2yl3ROeyoAAAAAOUlEQVQI12NYbAwE5gkMBgxAwCRANdo0FAiiBRhaXEAALB4AkWd0hdBsAiC6SAkINBUYEgWBQIgBABJ5C+NAe5vOAAAAAElFTkSuQmCC"
                alt=""
              />
              <p>手机端</p>
              <i class="van-icon van-icon-arrow"></i>
            </div>
          </div>
          <template #reference>
            <div class="client" v-if="liIndex === '1'">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOBAMAAADUAYG5AAAAIVBMVEUAAABJWHBLVnJIV29KWHFKWHBKV3BKWHFKVW5KU29KWHF8jjHLAAAACnRSTlMAw0FVsIPh10gb3nzzuAAAADRJREFUCNdjkFoFBgsZFjCAAReljEVKYKDFECgoKJYoKCgKEmYNgEi3uJd4gBmTjY0tGRgAgv0Pz/PTqBMAAAAASUVORK5CYII="
                alt=""
              />
              <p>电脑端</p>
              <i class="van-icon van-icon-arrow"></i>
            </div>
            <div class="client" v-else>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASBAMAAAByRUkBAAAAJFBMVEUAAABKWHFJV3FKWHFJWHBLWHJIV3BKWHFKWHFJV3FJWHFLWHBDnCfPAAAADHRSTlMAgmnr9BMv3/2yl3ROeyoAAAAAOUlEQVQI12NYbAwE5gkMBgxAwCRANdo0FAiiBRhaXEAALB4AkWd0hdBsAiC6SAkINBUYEgWBQIgBABJ5C+NAe5vOAAAAAElFTkSuQmCC"
                alt=""
              />
              <p>手机端</p>
              <i class="van-icon van-icon-arrow"></i>
            </div>
          </template>
        </van-popover>
        <div class="go-demo" @click="open">
          <p>查看演示站</p>
          <i aria-label="icon: right" class="anticon anticon-right"
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
        </div>
      </div>
    </template>
  </van-image-preview>
</template>
<script>
export default {
  name: "cooperateView",
  components: {},
  data() {
    return {
      visible: false,
      showPopover: false,
      x: "80%",
      selectItem: {
        localUrl: "",
        imgUrl: "",
        h5Url: "",
        pcUrl: "",
      },
      selectImgs: [],
      activeKey: "1",
      allList: [
        {
          name: "AVA",
          imgUrl: "https://acb.bet/_nuxt/img/ava.ce3ae85.png",
          localUrl: "https://avaxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/ava.e8de4bd.png",
          pcUrl: "https://acb.bet/_nuxt/img/ava.c52030d.png",
        },
        {
          name: "BVB",
          imgUrl: "https://acb.bet/_nuxt/img/bvb.67cf7c2.png",
          localUrl: "https://bvb6.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bvb.824c9a9.png",
          pcUrl: "https://acb.bet/_nuxt/img/bvb.2a87a78.png",
        },
        {
          name: "KVK",
          imgUrl: "https://acb.bet/_nuxt/img/kvk.aca2bc8.png",
          localUrl: "https://kvk8.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/kvk.8eaee41.png",
          pcUrl: "https://acb.bet/_nuxt/img/kvk.1c35396.png",
        },
        {
          name: "亨利",
          imgUrl: "https://acb.bet/_nuxt/img/亨利.73dcdf8.png",
          localUrl: "https://h22-xl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/亨利.9507e0b.png",
          pcUrl: "https://acb.bet/_nuxt/img/亨利.1709249.png",
        },
        {
          name: "利洋",
          imgUrl: "https://acb.bet/_nuxt/img/利洋.009b38d.png",
          localUrl: "https://y66cs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/利洋.6accc5d.png",
          pcUrl: "https://acb.bet/_nuxt/img/利洋.0d4092c.png",
        },
        {
          name: "博天下",
          imgUrl: "https://acb.bet/_nuxt/img/博天下.a7f32a9.png",
          localUrl: "https://919.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/博天下.3f2b0ea.png",
          pcUrl: "https://acb.bet/_nuxt/img/博天下.85515ef.png",
        },
        {
          name: "皇冠",
          imgUrl: "https://acb.bet/_nuxt/img/皇冠.0c71abf.png",
          localUrl: "https://hgcs.vip/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/皇冠.512b96f.png",
          pcUrl: "https://acb.bet/_nuxt/img/皇冠.bab3b84.png",
        },
        {
          name: "米博",
          imgUrl: "https://acb.bet/_nuxt/img/米博.6580c9e.png",
          localUrl: "https://mb6.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/米博.b0affa8.png",
          pcUrl: "https://acb.bet/_nuxt/img/米博.c0163f9.png",
        },
        {
          name: "BET365",
          imgUrl: "https://acb.bet/_nuxt/img/bet365.d3277c4.png",
          localUrl: "https://bet365xl.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bet365.dbf1e79.png",
          pcUrl: "https://acb.bet/_nuxt/img/bet365.f156037.png",
        },
        {
          name: "万趣",
          imgUrl: "https://acb.bet/_nuxt/img/万趣.386ac41.png",
          localUrl: "https://genting1.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/万趣.73fefe7.png",
          pcUrl: "https://acb.bet/_nuxt/img/万趣.5956e58.png",
        },
        {
          name: "超博",
          imgUrl: "https://acb.bet/_nuxt/img/超博.09d3bc3.png",
          localUrl: "https://choxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/超博.0a680e5.png",
          pcUrl: "https://acb.bet/_nuxt/img/超博.490e83c.png",
        },
        {
          name: "云顶世界",
          imgUrl: "https://acb.bet/_nuxt/img/云顶世界.9480bbe.png",
          localUrl: "https://gentingxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/云顶世界.5b7f313.png",
          pcUrl: "https://acb.bet/_nuxt/img/云顶世界.69534db.png",
        },
        {
          name: "凯旋门",
          imgUrl: "https://acb.bet/_nuxt/img/凯旋门.9e7d6a5.png",
          localUrl: "https://kxmcs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/凯旋门.2c2a51c.png",
          pcUrl: "https://acb.bet/_nuxt/img/凯旋门.6308195.png",
        },
        {
          name: "太阳城",
          imgUrl: "https://acb.bet/_nuxt/img/太阳城.c053b82.png",
          localUrl: "https://tyccs.one/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bet365.dbf1e79.png",
          pcUrl: "https://acb.bet/_nuxt/img/bet365.d6dd949.png",
        },
        {
          name: "爆竞技",
          imgUrl: "https://acb.bet/_nuxt/img/爆竞技.e74ce69.png",
          localUrl: "https://baojj.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/爆竞技.b9a148c.png",
          pcUrl: "https://acb.bet/_nuxt/img/爆竞技.c511446.png",
        },
        {
          name: "狂竞技",
          imgUrl: "https://acb.bet/_nuxt/img/狂竞技.743bb43.png",
          localUrl: "https://kuang.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/狂竞技.34aa208.png",
          pcUrl: "https://acb.bet/_nuxt/img/狂竞技.780c97a.png",
        },
        {
          name: "竞技侠",
          imgUrl: "https://acb.bet/_nuxt/img/竞技侠.6325956.png",
          localUrl: "https://jingjixia.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/竞技侠.dd34932.png",
          pcUrl: "https://acb.bet/_nuxt/img/竞技侠.5110ffd.png",
        },
        {
          name: "乐猴",
          imgUrl: "https://acb.bet/_nuxt/img/乐猴.3ab0d33.png",
          localUrl: "https://lehoucs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/乐猴.5ec9f85.png",
          pcUrl: "https://acb.bet/_nuxt/img/乐猴.c1e5b3e.png",
        },
        {
          name: "优点",
          imgUrl: "https://acb.bet/_nuxt/img/优点.3129773.png",
          localUrl: "https://youdiancs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/优点.6e3b03a.png",
          pcUrl: "https://acb.bet/_nuxt/img/优点.9186693.png",
        },
        {
          name: "千8",
          imgUrl: "https://acb.bet/_nuxt/img/千8.5156a8f.png",
          localUrl: "https://qian8.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/千8.eda4f10.png",
          pcUrl: "https://acb.bet/_nuxt/img/千8.c81f472.png",
        },
      ],
      list: [
        {
          name: "AVA",
          imgUrl: "https://acb.bet/_nuxt/img/ava.ce3ae85.png",
          localUrl: "https://avaxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/ava.e8de4bd.png",
          pcUrl: "https://acb.bet/_nuxt/img/ava.c52030d.png",
        },
        {
          name: "BVB",
          imgUrl: "https://acb.bet/_nuxt/img/bvb.67cf7c2.png",
          localUrl: "https://bvb6.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bvb.824c9a9.png",
          pcUrl: "https://acb.bet/_nuxt/img/bvb.2a87a78.png",
        },
        {
          name: "KVK",
          imgUrl: "https://acb.bet/_nuxt/img/kvk.aca2bc8.png",
          localUrl: "https://kvk8.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/kvk.8eaee41.png",
          pcUrl: "https://acb.bet/_nuxt/img/kvk.1c35396.png",
        },
      ],
      list1: [
        {
          name: "亨利",
          imgUrl: "https://acb.bet/_nuxt/img/亨利.73dcdf8.png",
          localUrl: "https://h22-xl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/亨利.9507e0b.png",
          pcUrl: "https://acb.bet/_nuxt/img/亨利.1709249.png",
        },
        {
          name: "利洋",
          imgUrl: "https://acb.bet/_nuxt/img/利洋.009b38d.png",
          localUrl: "https://y66cs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/利洋.6accc5d.png",
          pcUrl: "https://acb.bet/_nuxt/img/利洋.0d4092c.png",
        },
        {
          name: "博天下",
          imgUrl: "https://acb.bet/_nuxt/img/博天下.a7f32a9.png",
          localUrl: "https://919.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/博天下.3f2b0ea.png",
          pcUrl: "https://acb.bet/_nuxt/img/博天下.85515ef.png",
        },
      ],
      list2: [
        {
          name: "皇冠",
          imgUrl: "https://acb.bet/_nuxt/img/皇冠.0c71abf.png",
          localUrl: "https://hgcs.vip/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/皇冠.512b96f.png",
          pcUrl: "https://acb.bet/_nuxt/img/皇冠.bab3b84.png",
        },
        {
          name: "米博",
          imgUrl: "https://acb.bet/_nuxt/img/米博.6580c9e.png",
          localUrl: "https://mb6.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/米博.b0affa8.png",
          pcUrl: "https://acb.bet/_nuxt/img/米博.c0163f9.png",
        },
        {
          name: "BET365",
          imgUrl: "https://acb.bet/_nuxt/img/bet365.d3277c4.png",
          localUrl: "https://bet365xl.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bet365.dbf1e79.png",
          pcUrl: "https://acb.bet/_nuxt/img/bet365.f156037.png",
        },
      ],
      list3: [
        {
          name: "万趣",
          imgUrl: "https://acb.bet/_nuxt/img/万趣.386ac41.png",
          localUrl: "https://genting1.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/万趣.73fefe7.png",
          pcUrl: "https://acb.bet/_nuxt/img/万趣.5956e58.png",
        },
        {
          name: "超博",
          imgUrl: "https://acb.bet/_nuxt/img/超博.09d3bc3.png",
          localUrl: "https://choxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/超博.0a680e5.png",
          pcUrl: "https://acb.bet/_nuxt/img/超博.490e83c.png",
        },
      ],
      list4: [
        {
          name: "云顶世界",
          imgUrl: "https://acb.bet/_nuxt/img/云顶世界.9480bbe.png",
          localUrl: "https://gentingxl.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/云顶世界.5b7f313.png",
          pcUrl: "https://acb.bet/_nuxt/img/云顶世界.69534db.png",
        },
        {
          name: "凯旋门",
          imgUrl: "https://acb.bet/_nuxt/img/凯旋门.9e7d6a5.png",
          localUrl: "https://kxmcs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/凯旋门.2c2a51c.png",
          pcUrl: "https://acb.bet/_nuxt/img/凯旋门.6308195.png",
        },
        {
          name: "太阳城",
          imgUrl: "https://acb.bet/_nuxt/img/太阳城.c053b82.png",
          localUrl: "https://tyccs.one/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/bet365.dbf1e79.png",
          pcUrl: "https://acb.bet/_nuxt/img/bet365.d6dd949.png",
        },
      ],
      list5: [
        {
          name: "爆竞技",
          imgUrl: "https://acb.bet/_nuxt/img/爆竞技.e74ce69.png",
          localUrl: "https://baojj.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/爆竞技.b9a148c.png",
          pcUrl: "https://acb.bet/_nuxt/img/爆竞技.c511446.png",
        },
        {
          name: "狂竞技",
          imgUrl: "https://acb.bet/_nuxt/img/狂竞技.743bb43.png",
          localUrl: "https://kuang.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/狂竞技.34aa208.png",
          pcUrl: "https://acb.bet/_nuxt/img/狂竞技.780c97a.png",
        },
        {
          name: "竞技侠",
          imgUrl: "https://acb.bet/_nuxt/img/竞技侠.6325956.png",
          localUrl: "https://jingjixia.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/竞技侠.dd34932.png",
          pcUrl: "https://acb.bet/_nuxt/img/竞技侠.5110ffd.png",
        },
      ],
      list6: [
        {
          name: "乐猴",
          imgUrl: "https://acb.bet/_nuxt/img/乐猴.3ab0d33.png",
          localUrl: "https://lehoucs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/乐猴.5ec9f85.png",
          pcUrl: "https://acb.bet/_nuxt/img/乐猴.c1e5b3e.png",
        },
        {
          name: "优点",
          imgUrl: "https://acb.bet/_nuxt/img/优点.3129773.png",
          localUrl: "https://youdiancs.com/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/优点.6e3b03a.png",
          pcUrl: "https://acb.bet/_nuxt/img/优点.9186693.png",
        },
        {
          name: "千8",
          imgUrl: "https://acb.bet/_nuxt/img/千8.5156a8f.png",
          localUrl: "https://qian8.bet/?asset_type=s3",
          h5Url: "https://acb.bet/_nuxt/img/千8.eda4f10.png",
          pcUrl: "https://acb.bet/_nuxt/img/千8.c81f472.png",
        },
      ],
      liIndex: "1",
    };
  },
  methods: {
    open() {
      window.open(this.selectItem.localUrl);
    },
    select(index) {
      this.liIndex = index;
      this.selectImgs =
        this.liIndex === "1"
          ? [this.selectItem.pcUrl]
          : [this.selectItem.h5Url];
    },
    handleSelect(item) {
      this.selectItem = { ...item };

      this.selectImgs =
        this.liIndex === "1"
          ? [this.selectItem.pcUrl]
          : [this.selectItem.h5Url];
      this.visible = true;
    },
  },
};
</script>
<style lang="less">
.van-image-preview__cover {
  bottom: 0.53333rem;
  right: 0;
  top: auto !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="less" scoped>
.client-item {
  width: 4rem;
  height: 1.06667rem;
  color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 0.13333rem;
  }
  i {
    margin-left: 0.13333rem;
  }
}
.active {
  color: #2880ff;
  font-weight: bold;
}
.btn-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .client {
    width: 4rem;
    height: 1.06667rem;
    background: #fff;
    border-radius: 0.10667rem 0 0 0.10667rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 0.13333rem;
    }
    i {
      margin-left: 0.13333rem;
    }
  }

  .go-demo {
    width: 4rem;
    height: 1.06667rem;
    background: linear-gradient(335deg, #0c5afc 0%, #1c93fe 100%);
    box-shadow: 0 0.05333rem 0.32rem 0 rgba(12, 90, 252, 0.28);
    border-radius: 0 0.10667rem 0.10667rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    i {
      margin-left: 0.13333rem;
    }
  }
}

.demo-wrap {
  .tab-con {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .list-wrap {
    margin-top: 0.53333rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list-item {
      margin-bottom: 0.53333rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-items: flex-start;
      background: #ffffff;
      border-radius: 0.10667rem;
      border: 0.02667rem solid #d7dde9;
      .img-wrap {
        width: 9.2rem;
        min-height: 5.33333rem;
        background: #eff7ff;
        border-radius: 0.10667rem 0.10667rem 0 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          width: 6.16rem;
          height: 4.53333rem;
        }
      }
      .tip-wrap {
        width: 100%;
        padding: 0.4rem 0.53333rem;
        h5 {
          font-size: 0.56rem;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
        }
      }

      .tip {
        font-size: 0.09375rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #1d2129;
      }
      .label {
        margin-top: 0.05208rem;
        font-size: 0.08333rem;
        font-weight: 400;
        color: #656f81;
      }
    }
  }
}
.wrap {
  background: url(../assets/img/bg.622b51a.png);
  background-size: 100% 100%;
  width: 100%;
  .bg {
    width: 10rem;
    height: 7.2rem;
    padding-top: 1.86667rem;
    .item-con {
      padding: 0 1.6rem;
      h3 {
        text-align: center;
        font-size: 0.53333rem;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #1d2129;
      }
      h5 {
        text-align: center;
        margin-top: 0.08rem;
        font-size: 0.32rem;
        color: #1d2129;
        font-weight: 400;
      }
    }
  }
}
</style>
