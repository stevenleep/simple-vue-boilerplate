import { RouteRecordRaw } from "vue-router";
import { mergeFrameRoutes } from "@/router/helper";

const constantRouteModules = import.meta.globEager<string, RouteRecordRaw[]>("./routes/**/*.ts");
const unMergedConstantRoutes: RouteRecordRaw[] = Object.values(constantRouteModules).reduce(
  (previousConstantRoutes, module) => {
    // @ts-ignore
    return [...previousConstantRoutes, ...module.default];
  },
  [] as RouteRecordRaw[],
);

export default mergeFrameRoutes(unMergedConstantRoutes).routes;
