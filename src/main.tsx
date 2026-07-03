import React from "react";
import ReactDOM from "react-dom/client";

import { setupI18n } from "@/i18n";
import "@/styles/globals.css";
import App from "./app";

async function setupApp() {
  setupI18n();

  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

setupApp();
