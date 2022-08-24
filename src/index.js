import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// files
import AuthContextProvider from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
