import React from "react";
import ReactDom from "react-dom/client";
import Layout from "./components/layout";

const rootEl = document.querySelector("#root");
const root = ReactDom.createRoot(rootEl);
root.render(<Layout />);
