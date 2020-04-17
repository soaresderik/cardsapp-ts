import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Decknew from "@/views/Decknew.vue";
import OrderedPile from "@/views/OrderedPile.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/deck/new",
    name: "CARDS",
    component: Decknew,
  },
  {
    path: "/deck/:deck_id",
    name: "Ordered Pile",
    component: OrderedPile,
  },
  { path: "*", redirect: "/deck/new" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
