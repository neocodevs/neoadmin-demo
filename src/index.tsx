import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { apps, contexts } from "@neoco/neoco-backoffice";
import { headers } from "./pages";

const { App } = apps;
const { AuthProvider, ConfigProvider } = contexts;
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ConfigProvider>
        <App headers={headers} />
      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
