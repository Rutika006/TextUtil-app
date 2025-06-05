import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ import BrowserRouter
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/TextUtil-app">  {/* ✅ this is key for GitHub Pages */}
    <App />
  </BrowserRouter>
);
