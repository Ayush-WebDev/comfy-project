import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router-dom";

const CartButtons = () => {
  const navigate = useNavigate();
  const {
    state: { numOfProducts },
    dispatch,
    logout,
    loginWithRedirect,
    isAuthenticated,
  } = useGlobalContext();
  return (
    <>
      <div>
        <Wrapper className="cart-btn-wrapper">
          <div className="cart cart-container">
            <Link
              to="/cart"
              className="cart-btn"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
              <FaShoppingCart />
              <span className="cart-value">{numOfProducts}</span>
            </Link>
          </div>
          <div>
            {!isAuthenticated ? (
              <div>
                <div
                  className="auth-btn"
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  Login
                  <FaUserPlus />
                </div>
              </div>
            ) : (
              <div>
                <div
                  className="auth-btn"
                  onClick={() => {
                    dispatch({ type: "CLEAR_CART" });
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                  }}
                >
                  Logout
                  <FaUserMinus />
                </div>
              </div>
            )}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    position: relative;
    align-items: center;
  }
  .cart-container {
    display: flex;
    gap: 40px;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
