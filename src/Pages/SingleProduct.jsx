import React from "react";
import { SingleProductElement } from "../Components";
import { customFetch } from "../utils";

export const loadedElement = async ({ params }) => {
  try {
    const id = params.id;
    const prod = await customFetch(`/react-store-single-product?id=${id}`);
    return { product: prod.data };
  } catch (error) {
    setSingleProductLoading(false);
    console.log(error);
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
