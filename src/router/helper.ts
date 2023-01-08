import { Paths } from "@/configs";
import { FrameLayout } from "@/layouts";
import { RouteRecordRaw } from "vue-router";

export interface EnhanceRouteRecordRawMeta {
  frame?: boolean;
  layoutPath?: string;
}

export interface FrameRouteRecordRaw extends Omit<Partial<RouteRecordRaw>, "meta"> {
  meta?: RouteRecordRaw["meta"] & EnhanceRouteRecordRawMeta;
}

export const DefaultFrameRouteOptions: FrameRouteRecordRaw = {
  path: Paths.Root,
  name: "Root",
  component: FrameLayout,
  redirect: Paths.Root,
  meta: {
    frame: true,
  },
};

export function defineFrameRoute(subRoutes: RouteRecordRaw[], options: FrameRouteRecordRaw = {}) {
  const { meta, component, ...resetOptions } = { ...DefaultFrameRouteOptions, ...options };
  const isFrame = Boolean(meta?.frame);

  return {
    routes: subRoutes,
    ...options,
    generateRoutes() {
      return isFrame
        ? [
            {
              ...resetOptions,
              component,
              children: subRoutes,
              // @ts-ignore
              meta: { ...meta, layoutPath: component?.__file as string },
            },
          ]
        : subRoutes;
    },
  };
}

export function frameRouteWrapper(route: RouteRecordRaw): FrameRouteRecordRaw {
  const [wrappedRoute] = defineFrameRoute([route]).generateRoutes() as FrameRouteRecordRaw[];
  return wrappedRoute;
}

export function isFrameRoute(route: FrameRouteRecordRaw) {
  return Boolean(route.meta?.frame);
}

/**
 * @title Merge frame routes
 *
 * @description 一些时候我们会通过 defineFrameRoute 定义的一整个 frame 路由
 *              但是在实际开发中，我们可能会将一些 frame 路由拆分成多个文件
 *              这时候我们就需要将这些 frame 路由合并起来
 *
 * @param routes (RouteRecordRaw | FrameRouteRecordRaw)[]
 */
export function mergeFrameRoutes(routes: FrameRouteRecordRaw[] = []) {
  const mergedRoutes: FrameRouteRecordRaw[] = [];
  const routeMap = new Map<string, FrameRouteRecordRaw>();

  routes.forEach((route) => {
    if (isFrameRoute(route)) {
      const { path, name, meta } = route;
      const key = `${path}-${name?.toString()}-${meta?.layoutPath}`;

      const mergedRoute = routeMap.get(key);

      if (mergedRoute && mergedRoute.children && route.children) {
        mergedRoute.children.push(...route.children);
      } else {
        routeMap.set(key, route);
        mergedRoutes.push(route);
      }
    } else {
      mergedRoutes.push(route);
    }
  });

  return {
    routes: mergedRoutes,
    routeMap,
    getSubRoutes(path: string) {
      const route = routeMap.get(path);
      return route?.children || [];
    },
  };
}
