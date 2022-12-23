import React, { useReducer, useState } from "react";
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
import Cart from "./cart/cart";
import PlaceOrder from "./orders/placeOrder";
import ViewOrders from "./orders/viewOrder";
import BrandsListingDisplay from "./pages/brands/brandsListingDisplay";
import DetailsPageFunc from "./pages/details/detailFunc";

const AppRouter = () => {
  const [cart, setCart] = useState([]);
  console.log("this is the main cart", cart);
  const cartIds = cart.map((item) => {
    return item.id;
  });
  console.log(cartIds, "these are the ids of cart item");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const [ignored, forcedUpdate] = useReducer((x) => x + 1, 0);

  const removeFromCart = (product) => {
    if (cartIds.indexOf(product.id) > -1) {
      let newCart = cart.splice(cartIds.indexOf(product.id), 1);
      setCart(cart);
      console.log("item clicked", cartIds.indexOf(product.id));
      forcedUpdate();
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/Category" component={CategoryDisplay} />
        <Route path="/AllProducts" component={AllProductsDisplay} />
        <Route path="/Brands">
          <BrandDisplay />
        </Route>
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/listing/:categoryId" component={ListingPage} />
        <Route path="/brand/:brandId" component={BrandListingPage} />
        <Route
          path="/details"
          render={(porps) => (
            <DetailsPage
              {...porps}
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            />
          )}
        />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route
          path="/cart"
          render={() => <Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        {/* <Route path="/placeOrder" component={PlaceOrder} /> */}
        <Route
          path="/placeOrder"
          render={(porps) => <PlaceOrder cart={cart} {...porps} />}
        />
        <Route path="/viewOrders" component={ViewOrders} />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
