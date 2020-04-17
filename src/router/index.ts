import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Decknew from "@/views/Decknew.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/deck/new",
    name: "CARDS",
    component: Decknew,
  },
  { path: "*", redirect: "/deck/new" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
