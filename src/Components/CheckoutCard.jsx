import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const CheckoutCard = () => {
  const {
    taxAmount,
    isAuthenticated,
    loginWithRedirect,
    state: { totalAmount },
  } = useGlobalContext();
  return (
    <CheckoutCardBlock>
      <div className="checkoutcard-wrapper">
        <div className="row-checkout">
          <div className="row-checkout-item">
            <div className="subtotal-title">Subtotal :</div>
            <div className="checkout-text">${totalAmount?.toFixed(2)}</div>
          </div>
          <div className="row-checkout-item">
            <div className="checkout-title">Shipping fee :</div>
            <div className="checkout-text">${taxAmount}</div>
          </div>
          <hr style={{ width: "100%", height: "1px", color: "#ddd" }} />
          <div className="row-checkout-item">
            <div className="order-title">Order total :</div>
            <div className="checkout-text">
              ${(totalAmount + taxAmount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {!isAuthenticated ? (
          <button
            className="btn"
            style={{ width: "100%" }}
            onClick={loginWithRedirect}
          >
            Login
          </button>
        ) : (
          <Link
            className="btn"
            style={{ width: "100%", textAlign: "center" }}
            to={"/checkout"}
          >
            Proceed to Checkout
          </Link>
        )}
      </div>
    </CheckoutCardBlock>
  );
};

const CheckoutCardBlock = styled.div`
  .checkoutcard-wrapper {
    margin-top: 2rem;
    padding: 2.5rem;
    display: flex;
    border-radius: 3px;
    border: 1px solid var(--clr-grey-6);
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row-checkout {
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .row-checkout-item {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .order-title {
    font-size: 24px;
    font-weight: 700;
  }
  .subtotal-title {
    font-size: 18px;
    font-weight: 600;
  }
  .checkout-title {
    font-size: 16px;
    font-weight: 400;
  }
  .checkout-text {
    font-size: 16px;
  }
`;

export default CheckoutCard;
