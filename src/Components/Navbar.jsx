import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { links } from "../utils/links";
import styled from "styled-components";
import { FaBarsStaggered } from "react-icons/fa6";
import { useGlobalContext } from "../Context";
import CartButtons from "./CartButtons";
import Sidebar from "./Sidebar";

//// For styled components all the styles go in the same component

const Navbar = () => {
  const { user, isAuthenticated, setSidebar, isSidebarOpen } =
    useGlobalContext();
  return (
    <>
      <NavContainer>
        <div className="nav-header">
          <div className="nav-center">
            <Link to="/">
              <img src={Logo} alt="Comfy store" />
            </Link>

            <div className="nav-links">
              {links.map((link, index) => {
                const { id, text, url } = link;
                return (
                  <Link key={index} to={url}>
                    {text}
                  </Link>
                );
              })}
              {isAuthenticated && user && <Link to="/checkout">Checkout</Link>}
            </div>
            <CartButtons />
            {/* Sidebar */}
            <Sidebar />
            <div className="nav-toggle">
              <FaBarsStaggered
                onClick={() => {
                  setSidebar(!isSidebarOpen);
                }}
              />
            </div>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  z-index: 999999;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      column-gap: 30px;
      li {
        margin: 0 3rem;
      }
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
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
