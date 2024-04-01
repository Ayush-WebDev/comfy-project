import React from "react";
import { customFetch } from "../utils";
import { SingleProductElement } from "../Components";
export const loaderProduct = async ({ params }) => {
  const productID = params.id;
  try {
    const res = await customFetch(
      `/react-store-single-product?id=${productID}`
    );
    return { product: res.data };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const SingleProduct = () => {
  return (
    <>
      <div>
        <SingleProductElement />
      </div>
    </>
  );
};

export default SingleProduct;
