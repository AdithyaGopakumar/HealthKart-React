import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppRouter from "../Routing";

const getUserUrl = "http://localhost:5000/api/auth/userInfo";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: "",
    };
  }

  handleLogOut = () => {
    sessionStorage.removeItem("token");
    this.setState({ userData: "" });
    console.log(this.state.userData);
  };

  conditionalHeader = () => {
    if (this.state.userData) {
      // console.log(this.state.userData, "form if");
      return (
        <>
          <Link className="header-link" href="#">
            My Accounts & Orders
          </Link>
          <Link className="header-link" to={"/"}>
            Account name
          </Link>
          <button
            className="header-link buttob-link"
            onClick={this.handleLogOut}
          >
            Logout
          </button>
          <Link className="header-link" to="/cart">
            <ion-icon className="cart-icn" name="cart-outline"></ion-icon>
          </Link>
        </>
      );
    } else {
      // console.log(this.state.userData, "form else");
      return (
        <>
          <Link className="header-link" href="#">
            My Accounts & Orders
          </Link>
          <Link className="header-link" to={"/register"}>
            Register
          </Link>
          <Link className="header-link" to={"/login"}>
            Login
          </Link>
          {/* <Link className="header-link" to="/cart">
            <ion-icon className="cart-icn" name="cart-outline"></ion-icon>
          </Link> */}
        </>
      );
    }
  };

  render() {
    return (
      <>
        <header className="header">
          <div className="header-top">
            <Link to="/">
              <img
                className="logo"
                src="https://i.ibb.co/mcy9WKg/healthkart-logo-2.png"
                alt="healthkart-logo-2"
              />
            </Link>
            <div className="header-search">
              <div className="input-group mb-3">
                <button
                  className="btn btn-outline-secondary search-btn"
                  type="button"
                  id="button-addon1"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
                <input
                  type="text"
                  className="form-control search-box"
                  placeholder="Search for products, Brand and Health Goals"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
              </div>
            </div>
            {/* <Link className="header-link" href="#">
              My Accounts & Orders
            </Link>
            <Link className="header-link" to={"/register"}>
              Register
            </Link>
            <Link className="header-link" to={"/login"}>
              Login
            </Link>
            <Link className="header-link" to="/cart">
              <ion-icon className="cart-icn" name="cart-outline"></ion-icon>
            </Link> */}
            {this.conditionalHeader()}
          </div>
        </header>
        <hr />
        <div className="header-bottom">
          <button className="dark-mode-btn">
            <img
              className="bulb-img"
              src="https://i.ibb.co/z5bRyms/off-light-bulb.png"
              alt="Bulb"
            />
          </button>
          <Link className="header-link" to="/Brands">
            Brands
          </Link>
          <Link className="header-link" to="/Category">
            Category
          </Link>
          <Link className="header-link" to="/AllProducts">
            All Products
          </Link>
          <Link className="header-link" href="#">
            Best-Seller
          </Link>
          <Link className="header-link" href="#">
            Deals
          </Link>
          <Link className="header-link" href="#">
            Gift-Card
          </Link>
          <Link className="header-link" href="#">
            Blog,Videos & More
          </Link>
          <Link className="header-link" href="#">
            My Accounts & Orders
          </Link>
          <div className="header-btns">
            <button className="header-btn btn-consult">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>HK Consult
            </button>
            <button className="header-btn btn-find">
              <ion-icon name="location-outline"></ion-icon>Find a Store
            </button>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    fetch(getUserUrl, {
      method: "GET",
      headers: {
        "access-token": sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "form api");
        this.setState({
          userData: data,
        });
      });
  }
}

export default withRouter(Header);
