import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import ThemeWrapper from "./components/ThemeWrapper";
import ScrollObserver from "./utils/scrollObserver";
import ViewPortObserver from "./utils/viewportObserver";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <ViewPortObserver>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ViewPortObserver>
    </ScrollObserver>
  </React.StrictMode>
);
