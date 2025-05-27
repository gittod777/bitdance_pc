import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Overlay,
  Popup,
  List,
  Icon,
  Button,
  Tab,
  BackTop,
  Tabs,
  ImagePreview,
  Popover,
} from "vant";
import "vant/lib/index.css";
import "./assets/style/main.less";

const app = createApp(App);
app.use(Overlay);
app.use(Popup);
app.use(List);
app.use(Icon);
app.use(Button);
app.use(Tabs);
app.use(Tab);
app.use(BackTop);
app.use(ImagePreview);
app.use(Popover);
app.use(store).use(router).mount("#app");
