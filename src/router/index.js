import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import cooperate from "../views/cooperate.vue";
import brand from "../views/brand.vue";
import us from "../views/us.vue";
import web from "../views/web.vue";
import color from "../views/color.vue";
import sport from "../views/sport.vue";
import hatch from "../views/hatch.vue";
import demo from "../views/demo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cooperate",
    name: "cooperate",
    component: cooperate,
  },
  {
    path: "/web",
    name: "web",
    component: web,
  },
  {
    path: "/sport",
    name: "sport",
    component: sport,
  },
  {
    path: "/color",
    name: "color",
    component: color,
  },
  {
    path: "/us",
    name: "us",
    component: us,
  },
  {
    path: "/brand",
    name: "brand",
    component: brand,
  },
  {
    path: "/demo",
    name: "demo",
    component: demo,
  },
  {
    path: "/hatch",
    name: "hatch",
    component: hatch,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
