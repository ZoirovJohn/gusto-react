import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/font-awesome-all.min.css";
import { store } from "./app/store.ts";
import ContextProvider from "./app/context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
          <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
