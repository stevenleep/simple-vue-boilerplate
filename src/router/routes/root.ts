import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/configs";
import { defineFrameRoute } from "@/router/helper";

const rootRoutes: RouteRecordRaw[] = [
  {
    path: Paths.Root,
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
];

const frameRoutes = defineFrameRoute(rootRoutes);
export default frameRoutes.generateRoutes();
