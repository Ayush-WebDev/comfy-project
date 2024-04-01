import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";
const AddToCart = ({ productDetails }) => {
  const { dispatch } = useGlobalContext();
  const [numCart, setCart] = useState(1);
  const productData = {
    ...productDetails,
    numCart,
    cartID: `${productDetails.currentColor}${productDetails.product.id}`,
  };
  const navigate = useNavigate();
  return (
    <>
      <CartContainer className="cart-container">
        <div className="addtocart">
          <button
            className="addcart"
            onClick={() => {
              if (numCart === 1) return null;
              setCart(numCart - 1);
            }}
          >
            -
          </button>
          <p className="quantity">{numCart}</p>

          <button
            className="addcart"
            onClick={() => {
              setCart(numCart + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="btn"
          onClick={() => {
            setCart(numCart);
            dispatch({ type: "ADD_TO_CART", payload: productData });
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </CartContainer>
    </>
  );
};

const CartContainer = styled.div`
  padding: 20px 0;

  .addtocart {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    max-width: 160px;
    margin-bottom: 40px;
  }
  .quantity {
    margin: 0;
    font-size: 2rem;
    color: black;
    font-weight: 700;
  }
  .addcart {
    background: none;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
    width: 40px;
    cursor: pointer;
    height: 40px;
  }
`;

export default AddToCart;
