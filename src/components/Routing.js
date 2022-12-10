import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Category from "./pages/category/category";
import Brands from "./pages/AllProductsPage";
import Page2 from "./pages/get products/Allproducts";
import Page3 from "./pages/listing page/listing";
import Header from "./HeaderFooter/header";
import Footer from "./HeaderFooter/footer";
import "./HeaderFooter/headerfooter.css";
import HomePage from "./pages/HomePage/Home";
import CategoryDisplay from "./pages/category/categoryDisplay";
import ListingPage from "./pages/listing page/listing";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Category" component={CategoryDisplay} />
        <Route path="/Brands" component={Brands} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/listing/:categoryId" component={ListingPage} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
