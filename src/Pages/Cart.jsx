import React from "react";
import { BreadCrumb, CartItem } from "../Components";

const Cart = () => {
  return (
    <>
      <div>
        <BreadCrumb url={"/cart"} page={"Cart"} />
        <CartItem />
      </div>
    </>
  );
};

export default Cart;
