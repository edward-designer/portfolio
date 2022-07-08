import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import ThemeWrapper from "./components/ThemeWrapper";
import ScrollObserver from "./utils/scrollObserver";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </ScrollObserver>
  </React.StrictMode>
);
