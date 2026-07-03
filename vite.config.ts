import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_INFO__: {
      pkg: {
        name: pkg.name,
        version: pkg.version,
        license: pkg.license,
      },
      lastBuildTime: new Date().toISOString(),
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [react(), tailwindcss(), svgrPlugin()],
});
