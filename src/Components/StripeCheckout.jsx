import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  CardElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { useGlobalContext } from "../Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const promise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CheckoutForm = () => {
  const { state, user, dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const dataCart = {
    products: state.product,
    totalAmount: state.totalAmount,
    shipping: state.shipping,
  };
  //// Stripe Stuff

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState();
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    try {
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify(dataCart)
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setProcessing(false);
      setError(`Payment failed ${payload.error.message}`);
    } else {
      setProcessing(false);
      setError(null);
      setSucceeded(true);
      setTimeout(() => {
        dispatch({ type: "CLEAR_CART" });
        navigate("/");
      }, 5000);
    }
  };
  const paymentStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial,sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  return (
    <>
      <FormWrapper>
        <div>
          {succeeded ? (
            <>
              <article>
                <h4
                  style={{
                    fontSize: "20px",
                    textAlign: "center",
                    paddingBottom: "1rem",
                    maxWidth: "500px",
                  }}
                >
                  Thankyou for using Shopi store, You will be redirected shortly
                </h4>
              </article>
            </>
          ) : (
            <div style={{ paddingBottom: "1rem" }}>
              <h3>Hello, {user.given_name}</h3>
              <p>Your order total : ${state.totalAmount.toFixed(2)}</p>
            </div>
          )}
        </div>
        <form id="payment-form" onSubmit={handleSubmit}>
          <CardElement
            id="card-element"
            options={paymentStyle}
            onChange={handleChange}
          />
          <button disabled={disabled || processing || succeeded} id="submit">
            <span id="button-text">
              {processing ? (
                <div id="spinner" className="spinner"></div>
              ) : (
                "Pay Now"
              )}
            </span>
          </button>
          {error && (
            <>
              <div className="card-error" role="alert">
                {error}
              </div>
            </>
          )}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment successful, See the result in your dashboard
            <a href={`https://dashboard.stripe.com/test/payments`}>
              Stripe Dashboard
            </a>
          </p>
        </form>
      </FormWrapper>
    </>
  );
};

const StripeCheckout = () => {
  return (
    <>
      <StripeCheckoutWrapper>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </StripeCheckoutWrapper>
    </>
  );
};

export default StripeCheckout;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const StripeCheckoutWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 50vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 768px) {
    min-height: 80vh;

    form {
      width: 80vw;
      padding: 10px;
    }
  }
`;
