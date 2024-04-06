import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckoutCard from "./CheckoutCard";

const CartItem = () => {
  const navigate = useNavigate();
  const { state: product, dispatch } = useGlobalContext();
  const [newVal, setNewVal] = useState(0);

  return (
    <CartWrapper className="section-center">
      {product?.product?.length < 1 ? (
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
            Cart's empty, Fill it
          </h3>
          <Link className="btn" to="/products">
            Back to Products
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <div className="cart-row-header">
              <h3 className="item-singular">Item</h3>
              <h3 className="item-singular">Price</h3>
              <h3 className="item-singular">Quantity</h3>
              <h3 className="item-singular">Subtotal</h3>
              <div className="item-singular"></div>
            </div>
          </div>
          {product?.product?.map((currentProduct, index) => {
            let {
              currentColor,
              product: newProduct,
              numCart,
              cartID,
            } = currentProduct;
            const { name, images, price, id } = newProduct;

            return (
              <div key={index} className="cart-item">
                <Link to={`/products/${id}`} className=" item-singular">
                  <div className="product-details">
                    <img
                      className="img-product"
                      src={images[0].url}
                      alt={name}
                    />
                    <div>
                      <h4 className="product-cart-title">{name}</h4>
                      <div className="color-wrapper">
                        <h5>Color:</h5>
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: `${currentColor}`,
                            borderRadius: "2px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="item-singular">
                  <h4 className="product-cart-title price">${price / 100}</h4>
                </div>
                <div className="item-singular">
                  <div className="addtocart">
                    <button
                      className="addcart"
                      onClick={() => {
                        if (numCart > 1)
                          dispatch({
                            type: "DEC_CART",
                            payload: { price, cartID },
                          });
                      }}
                    >
                      -
                    </button>
                    <h4 className="quantity">{numCart}</h4>
                    <button
                      className="addcart"
                      onClick={() => {
                        dispatch({
                          type: "INC_CART",
                          payload: { price, cartID },
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="item-singular">
                  <h4 className="product-cart-title subtotal">
                    ${(price * numCart) / 100}
                  </h4>
                </div>
                <div className="item-singular" style={{ cursor: "pointer" }}>
                  <BsTrash
                    color="red"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { cartID, price, numCart },
                      });
                    }}
                  />
                </div>
              </div>
            );
          })}
          <div className="btn-wrapper">
            <button
              className="btn"
              onClick={() => {
                navigate("/products");
              }}
            >
              Continue shopping
            </button>
            <button
              className="btn-black"
              onClick={() => {
                dispatch({ type: "CLEAR_CART" });
              }}
            >
              Clear cart
            </button>
          </div>
          <div className="checkout-card-wrapper">
            <CheckoutCard />
          </div>
        </div>
      )}
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 100%;
  min-height: 65vh;
  padding: 6rem 1.5rem;
  .cart-row-header {
    display: flex;
    gap: 1rem;
    color: #737373;
    font-size: 16px;
    line-height: 1.2em;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
    padding: 1rem 2rem;
  }
  .cart-row-header h3 {
    font-size: 16px;
    line-height: 1.2em;
  }
  .cart-item {
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #ddd;
  }
  .img-product {
    width: 100px;
    height: 80px;
    border-radius: 5px;
    object-fit: cover;
  }
  .product-cart-title {
    font-size: 14px;
    color: #000;
    margin-bottom: 0;
    font-weight: 400;
  }
  .product-cart-title.price {
    color: var(--clr-primary-4);
  }
  .product-cart-title.subtotal {
    color: var(--clr-grey-6);
  }
  .product-details {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .item-singular:not(:last-child) {
    width: 23%;
    display: flex;
    justify-content: center;
  }
  .item-singular:last-child {
    width: 8%;
    display: flex;
    justify-content: center;
  }
  .item-singular:first-child {
    justify-content: flex-start;
  }
  .color-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .color-wrapper h5 {
    margin-bottom: 0;
    font-size: 10px;
    color: var(--clr-grey-7);
  }
  .addtocart {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    max-width: 160px;
  }
  .quantity {
    margin: 0;
    font-size: 1.5rem;
    color: black;
    font-weight: 700;
  }
  .addcart {
    background: none;
    font-size: 1.8rem;
    font-weight: 700;
    border: none;
    width: 40px;
    cursor: pointer;
    height: 40px;
  }
  .btn-wrapper {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
  .checkout-card-wrapper {
    max-width: 350px;
    margin: 0 0 0 auto;
  }
  @media (max-width: 992px) {
    .cart-item {
      flex-wrap: wrap;
      gap: 40px;
      justify-content: flex-start;
    }
    .item-singular:not(:last-child) {
      width: 40%;
      min-width: 250px;
      justify-content: flex-start;
    }
    .cart-row-header {
      display: flex;
      flex-wrap: wrap;
    }
    .cart-row-header .item-singular:not(:last-child) {
      justify-content: flex-start;
    }
    .btn-wrapper {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      padding-top: 40px;
    }
    .checkout-card-wrapper {
      margin: 0 auto;
    }
  }
`;

export default CartItem;
