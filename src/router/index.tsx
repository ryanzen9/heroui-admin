import {
  createBrowserRouter,
  createHashRouter,
  LoaderFunctionArgs,
  RouteObject,
} from "react-router";

import RootLayout from "@/layouts";

import { ROOT_ROUTE_ID } from "./constant";
import { useTransitionLoader } from "./hooks/loader";
import { baseRoutes } from "./routers";

// 已经加载好的界面
const loadedPaths = new Set<string>();

const rootRoute: RouteObject[] = [
  {
    path: "/",
    id: ROOT_ROUTE_ID,
    Component: RootLayout,
    children: baseRoutes,
    loader: ({ request }: LoaderFunctionArgs) => {
      useTransitionLoader();
      const relativePath = new URL(request.url).pathname;
      loadedPaths.add(relativePath);
    },
    shouldRevalidate: ({ nextUrl, currentUrl }) => {
      if (nextUrl.pathname === currentUrl.pathname) {
        return false;
      }
      /**
       * @zh 路由更新时，开始进度条动画
       * @en Start the progress bar animation when the route is updated
       */
      const isLoaded = loadedPaths.has(nextUrl.pathname);
      if (!isLoaded) {
        useTransitionLoader();
        const relativePath = nextUrl.pathname;
        loadedPaths.add(relativePath);
      }
      return false;
    },
  },
];

function createRouter() {
  if (import.meta.env.VITE_ROUTER_MODE === "hash") {
    return createHashRouter(rootRoute, {
      /**
       * @zh 路由模式为 hash 时，不需要设置 basename 属性，如果设置 basename 为 `/app`，根路由 `/` 则会变为 `/#/app`
       * @en When the routing mode is hash, you don't need to set the basename property. If you set it as `/app`, the root route `/` will become `/#/app`.
       * @see https://reactrouter.com/6.30.0/router-components/hash-router#basename
       */
      // basename: import.meta.env.BASE_URL,
    });
  }

  return createBrowserRouter(rootRoute, {
    basename: import.meta.env.BASE_URL,
  });
}

export const router = createRouter();
