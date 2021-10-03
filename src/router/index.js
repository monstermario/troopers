import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  // {
  //   path: "/team",
  //   name: "Team",
  //   // route level code-splitting
  //   // this generates a separate chunk (team.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import("../views/Team.vue"),
  // },
  // {
  //   path: "/storyline",
  //   name: "Storyline",
  //   component: () => import("../views/Storyline.vue"),
  // },
  // {
  //   path: "/collection",
  //   name: "Collection",
  //   component: () => import("../views/Collection.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
