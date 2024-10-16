import { Provider } from "react-redux";

import store from "./store";
import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/sidebar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <main className="flex h-screen w-full items-start justify-start gap-2 p-3 sm:fixed sm:top-0 sm:block sm:h-[100%] sm:p-0">
        <Navbar />
        <Sidebar />
        <Content />
      </main>
    </Provider>
  );
}

export default App;
