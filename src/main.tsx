import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeTogglerProvider from "./contexts/ThemeTogglerProvider";

// IMPORTING STYLES
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeTogglerProvider>
      <App />
    </ThemeTogglerProvider>
  </React.StrictMode>
);
