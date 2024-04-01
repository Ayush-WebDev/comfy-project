import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { links } from "../utils/links";
import { RxCross2 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const {
    isSidebarOpen,
    setSidebar,
    loginWithRedirect,
    isAuthenticated,
    logout,
    user,
  } = useGlobalContext();
  return (
    <SidebarContainer>
      <div className={`${isSidebarOpen ? "sidebar active" : "sidebar"}`}>
        <aside>
          <div className="sidebar-header">
            <img src={logo} />
            <RxCross2
              className="close-btn"
              onClick={() => {
                setSidebar(!isSidebarOpen);
              }}
            />
          </div>
          <div className="navlinks">
            {links.map((link, index) => {
              const { id, url, text } = link;
              return (
                <Link
                  onClick={() => {
                    setSidebar(!isSidebarOpen);
                  }}
                  key={index}
                  to={url}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="cart-btn-wrapper main">
            <div className="cart cart-container">
              <Link
                onClick={() => {
                  setSidebar(!isSidebarOpen);
                }}
                to="/cart"
                className="cart-btn"
              >
                Cart
                <FaShoppingCart />
                <span className="cart-value">0</span>
              </Link>
            </div>

            {isAuthenticated ? (
              <div>
                <div
                  className="auth-btn"
                  onClick={() => {
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    });
                  }}
                >
                  Logout
                  <FaUserMinus />
                </div>
              </div>
            ) : (
              <div>
                <div
                  onClick={() => {
                    setSidebar(!isSidebarOpen);
                    loginWithRedirect();
                  }}
                  to="/login"
                  className="auth-btn"
                >
                  Login
                  <FaUserPlus />
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    margin-bottom: 40px;
  }
  .sidebar {
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    display: block;
  }
  .active {
    display: block;
    z-index: 1;
    transform: translateX(0%);
  }

  .close-btn {
    width: 40px;
    height: 40px;
    display: flex;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 15px;
    position: absolute;
    top: 25px;
    right: 20px;
  }
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
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
    justify-content: flex-start;
    position: relative;
    svg {
      height: 1.2rem;
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
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .cart-btn-wrapper.main {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 40px;
    margin-top: 40px;
    padding: 0 20px 0 10px;
  }
  .navlinks {
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
      color: var(--clr-grey-3);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      border-bottom: 2px solid transparent;
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid var(--clr-primary-7);
      }
    }
  }
  @media (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
