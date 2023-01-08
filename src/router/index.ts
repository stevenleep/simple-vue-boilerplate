import type { App } from "vue";
import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import constantRoutes from "./constants";

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;

/**
 * @Apis
 */

export function setupRouter(app: App<Element>) {
  app.use(router);
}
