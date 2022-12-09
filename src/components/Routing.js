import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Category from "./pages/category";
import Brands from "./pages/Brands";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Header from "./HeaderFooter/header";
import Footer from "./HeaderFooter/footer";
import "./HeaderFooter/headerfooter.css";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Page2} />
        <Route path="/Category" component={Category} />
        <Route path="/Brands" component={Brands} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
