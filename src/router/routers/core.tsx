import AboutPage from "@/pages/about";
import BlogPage from "@/pages/blog";
import DocsPage from "@/pages/docs";
import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import { RouteObject } from "react-router";

const routers = [
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
] satisfies RouteObject[];

export default routers;
