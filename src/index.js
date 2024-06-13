import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./dark-mode.css";
import App from "./App";
import { AppProvider } from "./context";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
