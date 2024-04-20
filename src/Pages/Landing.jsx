import React from "react";
import {
  Hero,
  FeaturedProducts,
  CardsContainer,
  Newsletter,
} from "../Components";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <FeaturedProducts />
        <CardsContainer />
        <Newsletter />
      </div>
    </>
  );
};

export default Landing;
