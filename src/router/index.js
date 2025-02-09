import { createRouter, createWebHistory } from "vue-router";
// import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // children:[]
  // },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
