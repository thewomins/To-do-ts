import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./screens/index/index";
import reportWebVitals from "./reportWebVitals";
import {TodoContextProvider} from "./hooks/Todo";
import {ThemeContextProvider} from "./hooks/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
