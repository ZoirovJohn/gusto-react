import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/App.tsx";
import ContextProvider from "./app/context/ContextProvider.tsx";
import { BasketProvider } from "./app/hooks/BasketProvider.tsx";
import { store } from "./app/store.ts";
import { SocketProvider } from "./app/context/SocketContext.tsx";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/font-awesome-all.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <SocketProvider>
          <BasketProvider>
            <App />
          </BasketProvider>
        </SocketProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
