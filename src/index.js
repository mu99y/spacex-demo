import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DataProvider } from "./providers/DataContext";

ReactDOM.render(
  <DataProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DataProvider>,
  document.getElementById("root")
);
