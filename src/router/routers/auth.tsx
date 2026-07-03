import { lazy } from "react";
import { AppRouteRecordRaw } from "./type";

import { i18n } from "@/i18n/index";
import { loginPath } from "../route-path";

// lazy: React 提供的组件懒加载函数,在组件真正需要渲染时，再动态加载该组件对应的 JavaScript 模块。
// import 的组件最好使用 default 导出或者使用 React.lazy() 包裹的方式导出，这样可以确保组件在懒加载时能够正确地被识别和渲染。
// 同时必须配合 Suspense 组件使用，Suspense 组件可以在组件加载过程中显示一个 fallback（回退）UI，直到组件加载完成为止。
// 例如：
// const Login = lazy(() => import("@/pages/login"));
// <Suspense fallback={<div>Loading...</div>}>
//   <Login />
// </Suspense>
const Login = lazy(() => import("@/pages/login"));

const $t = i18n.t;

const routes: AppRouteRecordRaw[] = [
  {
    path: loginPath,
    Component: Login,
    handle: {
      hideInMenu: true,
      title: $t("authority.login"),
    },
  },
];

export default routes;
