import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <>
      <NewsletterContainer>
        <div className="section-center">
          <div className="newsletter">
            <div>
              <h2>Join our Newsletter and get 20% off!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
                accusantium atque laborum optio mollitia officiis soluta fuga?
                Sequi, qui est.
              </p>
            </div>
            <form action="https://formspree.io/f/xeqbbbnk" method="POST">
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </NewsletterContainer>
    </>
  );
};

const NewsletterContainer = styled.div`
  background-color: white;
  padding: 10rem 1rem 8rem;
  h2 {
    font-size: 2rem;
    color: var(--clr-primary-2);
    margin-bottom: 20px;
  }
  .newsletter {
    display: grid;
    padding-top: 5rem;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 40px;
    input {
      padding: 10px 20px;
      border-radius: 6px 0 0 6px;
      border-width: 1px 0 1px 1px;
      color: var(--clr-black);
      width: 100%;
      height: 50px;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 8px 15px;
        text-align: center;
        width: 100%;
        max-width: 200px;
        height: 50px;
        background-color: var(--clr-primary-4);
        color: white;
        font-size: 1rem;
        border-radius: 0 6px 6px 0;
        border-width: 1px;
        &:hover {
          background-color: var(--clr-primary-7);
          color: var(--clr-primary-1);
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 5rem 1rem 5rem;
    .newsletter {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Newsletter;
