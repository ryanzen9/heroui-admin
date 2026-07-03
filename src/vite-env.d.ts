// vite-env.d.ts 是 Vite + TypeScript 项目中的全局类型声明文件。
// Vite 官方建议通过项目中的 vite-env.d.ts 扩展 ImportMetaEnv，为自定义环境变量提供类型。
// https://vitejs.dev/guide/env-and-mode.html
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// interface ViteTypeOptions {
//   // By adding this line, you can make the type of ImportMetaEnv strict
//   // to disallow unknown keys.
//   // strictImportMetaEnv: unknown
// }

// interface ImportMetaEnv {
//   readonly VITE_APP_TITLE: string;
//   // more env variables...
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }
