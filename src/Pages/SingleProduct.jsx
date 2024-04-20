import React from "react";
import { SingleProductElement } from "../Components";
import { singleFetch } from "../utils";

export const loadedElement = async ({ params }) => {
  try {
    const id = params.id;
    const prod = await singleFetch(`?id=${id}`);
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
