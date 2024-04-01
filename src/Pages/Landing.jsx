import React from "react";
import {
  Hero,
  FeaturedProducts,
  CardsContainer,
  Newsletter,
} from "../Components";
import { customFetch } from "../utils";

export const loader = async () => {
  try {
    const res = await customFetch("/react-store-products");

    return { products: res.data };
  } catch (error) {
    console.log(error);
    return null;
  }
};

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
