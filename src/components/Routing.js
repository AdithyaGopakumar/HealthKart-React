import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Category from "./pages/category/category";
import AllProductsDisplay from "./pages/get products/AllProductsDisplay";
import Page2 from "./pages/get products/Allproducts";
import Page3 from "./pages/listing page/listing";
import Header from "./HeaderFooter/header";
import Footer from "./HeaderFooter/footer";
import "./HeaderFooter/headerfooter.css";
import HomePage from "./pages/HomePage/Home";
import CategoryDisplay from "./pages/category/categoryDisplay";
import ListingPage from "./pages/listing page/listing";
import BrandDisplay from "./pages/brands/brandsDisplay";
import BrandListingPage from "./pages/brands/brandslisting";
// import DisplayDetails from "./pages/details/detailPageDisplay";
import DetailsPage from "./pages/details/details";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Category" component={CategoryDisplay} />
        <Route path="/AllProducts" component={AllProductsDisplay} />
        <Route path="/Brands" component={BrandDisplay} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/listing/:categoryId" component={ListingPage} />
        <Route path="/brand/:brandId" component={BrandListingPage} />
        <Route path="/details" component={DetailsPage} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
