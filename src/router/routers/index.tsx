import authRouters from "./auth";
import coreRouters from "./core";
export const baseRoutes = [...coreRouters, ...authRouters];
