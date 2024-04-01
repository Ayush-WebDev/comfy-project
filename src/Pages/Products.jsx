import React from "react";
import { ProductContainer } from "../Components";
import { customFetch } from "../utils";
import axios from "axios";
export const loaderProducts = async () => {
  try {
    const response = await customFetch("/react-store-products");

    return { products: response.data };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Products = () => {
  return (
    <>
      <div>
        <ProductContainer />
      </div>
    </>
  );
};

export default Products;
