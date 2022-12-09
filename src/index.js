import React from "react";
import ReactDom from "react-dom/client";
import AppRouter from "./components/Routing";
const rootEl = document.querySelector("#root");
const root = ReactDom.createRoot(rootEl);
root.render(<AppRouter />);
