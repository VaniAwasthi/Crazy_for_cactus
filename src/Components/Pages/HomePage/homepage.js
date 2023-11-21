import React from "react";
import Navbar from "../../../reusable/navbar/container";
import HeroCarousel from "./components/HeroCarousel";
import OfferSection from "./components/offers";
import Categories from "./components/Categories";
import FeatureSection from "./components/Features";
import BestSeller from "./components/BestSeller";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCarousel />
      <OfferSection />
      <Categories />
      <FeatureSection />
      <BestSeller />
    </>
  );
};

export default Homepage;