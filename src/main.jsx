import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LikeContextProvider from "./context/LikeContext";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeContextProvider>
        <App />
      </LikeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
