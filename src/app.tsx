import { router } from "@/router";
import "@/styles/globals.css";

import { RouterProvider } from "react-router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
