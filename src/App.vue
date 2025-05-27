<template>
  <headerView></headerView>
  <router-view />
  <footView></footView>
  <van-back-top />
</template>
<script>
import footView from "./components/foot.vue";
import headerView from "./components/header.vue";
export default {
  components: {
    headerView,
    footView,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
body,
h1,
h2,
h3,
h4,
h5,
div,
p,
h5 html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
</style>
