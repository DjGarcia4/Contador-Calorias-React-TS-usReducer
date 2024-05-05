import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ActivityProvicer } from "./context/ActivityContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActivityProvicer>
      <App />
    </ActivityProvicer>
  </React.StrictMode>
);
