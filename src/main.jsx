import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DictionaryProvider } from "./context/DictionaryContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>
);
