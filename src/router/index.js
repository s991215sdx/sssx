import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 使用哈希模式
  routes, // short for `routes: routes`
});

export default router;
