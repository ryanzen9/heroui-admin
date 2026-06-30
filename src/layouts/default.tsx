import { Outlet } from "react-router";
import { Headers } from "./components/headers";
import { Provider } from "./provider";

export default function DefaultLayout() {
  return (
    <Provider>
      {" "}
      <div className="relative flex flex-col h-screen">
        <Headers />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
          <Outlet />
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <a
            className="flex items-center gap-1 text-current no-underline"
            href="https://heroui.com?utm_source=vite-template"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text-muted">Powered by</span>
            <p className="text-accent">HeroUI</p>
          </a>
        </footer>
      </div>
    </Provider>
  );
}
