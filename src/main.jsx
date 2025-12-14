import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import store, { persistedStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./style/global.css";
import Router from "./Router";
import Loader from "./components/ui/Loader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={<Loader />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
