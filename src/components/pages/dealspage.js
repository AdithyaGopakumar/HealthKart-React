import React from "react";
import FlashSaleCarousel from "../Carousel/flashSale";
import TrendingNowCarousel from "../Carousel/trendingNow";
import TrendingWheyCarousel from "../Carousel/trendingWhey";
import GainersCarousel from "../Carousel/gainers";
import Header from "../HeaderFooter/header";
import Extras from "../Elements/extras";
import Advert from "../Elements/advert";

const DealsPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FlashSaleCarousel />
        <TrendingNowCarousel />
        <TrendingWheyCarousel />
        <GainersCarousel />
        <Advert />
        <Extras />
      </div>
    </>
  );
};

export default DealsPage;
