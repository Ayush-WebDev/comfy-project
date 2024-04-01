import React from "react";
import styled from "styled-components";
import { services } from "../utils/links";
const CardsContainer = () => {
  return (
    <>
      <CardsWrapper>
        <div className="section-center">
          <div className="service-intro">
            <h2>Custom Furniture Built Only For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, quibusdam eum! Ullam animi nobis sequi?
            </p>
          </div>
          <div className="service-main">
            {services.map((service, index) => {
              const { id, icon, text, title } = service;
              return (
                <div key={index} className="service-container">
                  <div className="icon">{icon}</div>
                  <div className="service-content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardsWrapper>
    </>
  );
};

const CardsWrapper = styled.div`
  padding: 5rem 1rem 1rem;
  background-color: var(--clr-primary-10);
  text-align: center;
  .service-intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    text-align: left;
    padding: 3rem 0;
    h2 {
      font-size: 2rem;
      color: var(--clr-primary-1);
      max-width: 60%;
    }
  }
  .service-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: -5rem;
    position: relative;
  }
  .icon {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    font-size: 30px;
    color: var(--clr-primary-1);
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .service-container {
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: var(--clr-primary-8);
  }
  @media (max-width: 992px) {
    padding: 5rem 1rem 1rem;
    background-color: var(--clr-primary-10);
    text-align: center;
    .service-intro {
      grid-template-columns: repeat(1, 1fr);
      h2 {
        max-width: none;
        font-size: 1.8rem;
      }
    }
    .service-main {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default CardsContainer;
