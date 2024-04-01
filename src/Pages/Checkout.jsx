import React from "react";
import { BreadCrumb, StripeCheckout } from "../Components";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <div>
        <BreadCrumb url={"/checkout"} page={"Checkout"} />
      </div>
      {state.product.length < 1 ? (
        <>
          <div
            style={{
              padding: "1rem",
              textAlign: "center",
              minHeight: "60vh",
              paddingTop: "4rem",
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
              Cart's empty, Fill it
            </h3>
            <Link className="btn" to="/products">
              Back to Products
            </Link>
          </div>
        </>
      ) : (
        <div>
          <StripeCheckout />
        </div>
      )}
    </>
  );
};

export default Checkout;
