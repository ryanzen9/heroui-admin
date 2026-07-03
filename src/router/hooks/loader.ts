import { NProgress } from "@/utils/progress";
import { LoaderFunctionArgs } from "react-router";

export async function userLoader({ request, params }: LoaderFunctionArgs) {
  const response = await fetch(`/api/users/${params.userId}`, {
    signal: request.signal,
  });

  if (!response.ok) {
    throw new Response("用户不存在", {
      status: response.status,
    });
  }

  return response.json();
}

export async function useTransitionLoader() {
  /**
   * @zh 初次加载路由时，开始进度条动画
   * @en Start the progress bar animation when loading routes for the first time
   */
  const transitionProgress = true;
  if (transitionProgress) {
    NProgress.start();
  }
  return null;
}
