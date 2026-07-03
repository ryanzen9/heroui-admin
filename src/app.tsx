import { router } from "@/router";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Suspense } from "react";

import { RouterProvider } from "react-router";

function App() {
  return (
    <ConfigProvider>
      <Suspense>
        <RouterProvider router={router} />;
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
