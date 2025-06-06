import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";  // Import HashRouter
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter basename="/TextUtil-app"> {/* Wrap your App with HashRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
