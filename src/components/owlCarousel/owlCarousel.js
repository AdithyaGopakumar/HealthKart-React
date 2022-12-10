import React from "react";
import FlashSale from "./flashsale";

class OwlCarousel extends React.Component {
  render() {
    return (
      <>
        <section class="products">
          {/* <div class="section-top">
            <div class="section-heading">
              <ion-icon name="flash-outline"></ion-icon>
              <span>Flash sale</span>
            </div>
            <div class="view-all">
              <a class="view-all-link" href="#">
                View all
              </a>
            </div>
          </div>
          <hr /> */}
          {/* <div class="product-list"> */}
          <div class="owl-carousel ">
            <FlashSale />
            {/* </div> */}
          </div>
        </section>
      </>
    );
  }
}

export default OwlCarousel;
