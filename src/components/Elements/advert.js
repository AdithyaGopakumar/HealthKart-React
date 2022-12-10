import React from "react";

const Advert = () => {
  return (
    <>
      <section class="advert">
        <div class="ad-flex">
          <div class="ad-common fst-ad">
            <img
              class="ad-img"
              src="https://img6.hkrtcdn.com/7590/bnr_758975_o.png"
              alt="TrueBasics ad"
            />
            <div class="ad-text">
              <span class="ad-heading ad-spacing">TrueBasics </span>
              <span class="ad-heading">Upto 20% Off</span>
              <p class="ad-sm-text">Clinically Researched Essentials</p>
              <button class="ad-btn">Shop now</button>
            </div>
          </div>
          <div class="ad-common scnd-ad">
            <img
              class="ad-img"
              src="	https://img1.hkrtcdn.com/20061/bnr_2006050_o.png"
              alt="MuscleBlaze ad"
            />
            <div class="ad-text">
              <span class="ad-heading ad-spacing">MuscleBlaze </span>
              <span class="ad-heading">Upto 30% Off</span>
              <p class="ad-sm-text">More Power To You</p>
              <button class="ad-btn">Shop now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advert;
