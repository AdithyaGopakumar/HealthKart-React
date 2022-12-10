import React from "react";

const flashSaleURL =
  "https://healthkart-render-api.onrender.com/allproducts/flashsale";

class FlashSale extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flashSaleProducts: "",
    };
  }

  renderProducts = (data) => {
    console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div class="item product-padding">
              <div class="product">
                <div class="product-illustrations">
                  <a href="#" class="to-product">
                    <img
                      id="product-img"
                      src={item.image}
                      alt={item.product_name}
                    />
                  </a>
                  <a href="#">
                    <ion-icon
                      class="heart-icon"
                      name="heart-outline"
                    ></ion-icon>
                  </a>
                  <div class="offer-tag">
                    <span class="offer">{item.offer}%</span>
                  </div>
                </div>
                <div class="product-details">
                  <a href="#" class="to-product">
                    <span class="product-name">{item.product_name}</span>
                  </a>
                  <div class="rating">
                    <ion-icon
                      class="rating-star"
                      name="star-outline"
                    ></ion-icon>
                    <span class="rating-value">
                      {item.rating} ({item.reviews})
                    </span>
                  </div>
                  <div class="price-and-cart">
                    <div class="price">
                      <span class="new-price">Rs.{item.sell_price}</span>
                      <span class="old-price">Rs.{item.old_price}</span>
                    </div>
                    <a href="#" class="add-to-cart">
                      <ion-icon
                        class="cart-icon"
                        name="heart-outline"
                      ></ion-icon>
                      <span class="add-text">Add</span>
                    </a>
                  </div>
                </div>
                <div class="premium-price">
                  <div>
                    <span class="premium-price-text">Premium Price: </span>
                    <span class="premium-price-value">
                      Rs.{item.premium_price}
                    </span>
                  </div>
                  <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.renderProducts(this.state.flashSaleProducts)}</>;
  }

  // render() {
  //   return (
  //     <>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="item product-padding">
  //         <div class="product">
  //           <div class="product-illustrations">
  //             <a href="product.html" class="to-product">
  //               <img
  //                 id="product-img"
  //                 src="https://img4.hkrtcdn.com/13526/prd_1352563-MuscleBlaze-Super-Gainer-XXL-11-lb-Chocolate-Mint_o.jpg
  //     "
  //                 alt="Mass Gainer"
  //               />
  //             </a>
  //             <a href="#">
  //               <ion-icon class="heart-icon" name="heart-outline"></ion-icon>
  //             </a>
  //             <div class="offer-tag">
  //               <span class="offer">41% off</span>
  //             </div>
  //           </div>
  //           <div class="product-details">
  //             <a href="#" class="to-product">
  //               <span class="product-name">
  //                 MuscleBlaze Super Gainer XXL, 11 lb, Chocolate Mint
  //               </span>
  //             </a>
  //             <div class="rating">
  //               <ion-icon class="rating-star" name="star-outline"></ion-icon>
  //               <span class="rating-value">4.5 (6,145)</span>
  //             </div>
  //             <div class="price-and-cart">
  //               <div class="price">
  //                 <span class="new-price">Rs.3799</span>
  //                 <span class="old-price">Rs.6449</span>
  //               </div>
  //               <a href="#" class="add-to-cart">
  //                 <ion-icon class="cart-icon" name="heart-outline"></ion-icon>
  //                 <span class="add-text">Add</span>
  //               </a>
  //             </div>
  //           </div>
  //           <div class="premium-price">
  //             <div>
  //               <span class="premium-price-text">Premium Price: </span>
  //               <span class="premium-price-value">Rs.3685</span>
  //             </div>
  //             <ion-icon class="lock" name="lock-closed-outline"></ion-icon>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  componentDidMount() {
    fetch(flashSaleURL, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ flashSaleProducts: data });
      });
  }
}

export default FlashSale;
