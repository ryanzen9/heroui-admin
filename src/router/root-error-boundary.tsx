import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export function RootErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <h1>{error.status}</h1>
        <p>{error.statusText || "请求失败"}</p>

        {error.data ? <pre>{String(error.data)}</pre> : null}

        <Link to="/">返回首页</Link>
      </main>
    );
  }

  if (error instanceof Error) {
    return (
      <main>
        <h1>应用发生错误</h1>
        <p>{error.message}</p>
        <Link to="/">返回首页</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>未知错误</h1>
      <Link to="/">返回首页</Link>
    </main>
  );
}
