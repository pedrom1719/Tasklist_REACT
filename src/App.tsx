import { Provider } from "react-redux";
import { MenuIcon } from "lucide-react";

import store from "./store";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

import mainLogo from "/favicon.png";

function App() {
  return (
    <Provider store={store}>
      <main className="flex h-full w-full items-start justify-start gap-2 sm:fixed sm:top-0 sm:block sm:h-[100%]">
        <header className="hidden w-full bg-violet-500 p-4 sm:flex sm:justify-between">
          <MenuIcon className="h-6 w-6 cursor-pointer text-white" />
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold tracking-wider text-white">
              TASKLIST
            </h2>
            <img src={mainLogo} className="h-auto w-6 mix-blend-screen" />
          </div>
        </header>
        <Sidebar />
        <Content />
      </main>
    </Provider>
  );
}

export default App;
