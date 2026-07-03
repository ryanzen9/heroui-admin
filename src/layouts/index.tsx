import { PageError } from "@/components/page-error";
import { NProgress } from "@/utils/progress";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router";
import { Provider } from "./provider";

export default function RootLayout() {
  // 当浏览器地址栏的路径发生变化时，useLocation 会返回一个新的 location 对象，从而触发组件的重新渲染。
  const location = useLocation();

  useEffect(() => {
    // 地址栏路径发生变化时，loader 加载完毕，结束进度条
    NProgress.done();
  }, [location]);

  return (
    <Provider>
      {/* bun add react-error-boundary 路由跳转错误处理库，当子组件渲染错误时渲染 FallbackComponent */}
      <ErrorBoundary FallbackComponent={PageError}>
        <Outlet />
        {/* <AuthGuard>
        </AuthGuard> */}
      </ErrorBoundary>
    </Provider>
  );
}
