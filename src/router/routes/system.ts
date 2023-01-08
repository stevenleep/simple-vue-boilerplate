import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/configs";
import { defineFrameRoute } from "@/router/helper";

const SystemRoutes: RouteRecordRaw[] = [
  {
    path: Paths.About,
    name: "About",
    component: () => import("@/views/about/index.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: Paths.NotFound,
    name: "NotFound",
    component: () => import("@/views/account/Login.vue"),
  },
];

export default defineFrameRoute(SystemRoutes).generateRoutes();
