import { createBrowserRouter, redirect } from "react-router";

import DefaultLayout from "@/layouts/default";
import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import DocsPage from "@/pages/docs";
import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import { RootErrorBoundary } from "./root-error-boundary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        index: true,
        Component: IndexPage,
      },
      {
        path: "docs",
        Component: DocsPage,
      },
      {
        path: "pricing",
        Component: PricingPage,
      },
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      //   {
      //     path: "app",
      //     Component: AppLayout,
      //     loader: authLoader,
      //     children: [
      //       {
      //         index: true,
      //         Component: DashboardPage,
      //       },
      //       {
      //         path: "users",
      //         Component: UsersPage,
      //         loader: usersLoader,
      //       },
      //       {
      //         path: "users/:userId",
      //         Component: UserDetailPage,
      //         loader: userDetailLoader,
      //       },
      //       {
      //         path: "settings",
      //         Component: SettingsPage,
      //       },
      //     ],
      //   },
    ],
  },
]);

async function authLoader() {
  const user = await Promise.resolve({ id: 1, name: "John Doe" });

  if (!user) {
    throw redirect("/login");
  }

  return { user };
}
