import React from "react";
import ReactDOM from "react-dom/client";

import { setupI18n } from "@/i18n";
import { router } from "@/router";
import "@/styles/globals.css";

import { RouterProvider } from "react-router";

setupI18n();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
