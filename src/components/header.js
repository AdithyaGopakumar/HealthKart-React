import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div class="header-top">
          <a href="#">
            <img
              class="logo"
              src="https://i.ibb.co/mcy9WKg/healthkart-logo-2.png"
              alt="healthkart-logo-2"
            />
          </a>
          <div class="header-search">
            <div class="input-group mb-3">
              <button
                class="btn btn-outline-secondary search-btn"
                type="button"
                id="button-addon1"
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
              <input
                type="text"
                class="form-control search-box"
                placeholder="Search for products, Brand and Health Goals"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <a class="header-link" href="#">
            Loyalty Rewards
          </a>
          <a class="header-link" href="#">
            Customer Support
          </a>
          <a class="header-link" href="#">
            My Accounts & Orders
          </a>
          <a class="header-link" href="#">
            <ion-icon class="cart-icn" name="cart-outline"></ion-icon>
          </a>
        </div>
      </header>
      <hr />
      <div class="header-bottom">
        <button class="dark-mode-btn">
          <img
            class="bulb-img"
            src="https://i.ibb.co/z5bRyms/off-light-bulb.png"
            alt="Bulb"
          />
        </button>
        <a class="header-link" href="#">
          Category
        </a>
        <a class="header-link" href="#">
          Brand
        </a>
        <a class="header-link" href="#">
          Gender
        </a>
        <a class="header-link" href="#">
          Best-Seller
        </a>
        <a class="header-link" href="#">
          Deals
        </a>
        <a class="header-link" href="#">
          Gift-Card
        </a>
        <a class="header-link" href="#">
          Blog,Videos & More
        </a>
        <a class="header-link" href="#">
          My Accounts & Orders
        </a>
        <div class="header-btns">
          <button class="header-btn btn-consult">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>HK Consult
          </button>
          <button class="header-btn btn-find">
            <ion-icon name="location-outline"></ion-icon>Find a Store
          </button>
        </div>
        <div class="geo">
          <img class="weather-img" src="" alt="weather" />
          <span class="temp"></span>
          <span class="temp-degree">&deg</span>
          <span class="weather"></span>
          <p class="city"></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
