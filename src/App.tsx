import { Provider } from "react-redux";
import store from "./store";

import Content from "./components/content/Content";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <Provider store={store}>
      <main className="flex h-screen items-start justify-start gap-2 p-3">
        <Sidebar />
        <Content />
      </main>
    </Provider>
  );
}

export default App;
