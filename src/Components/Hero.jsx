import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/hero-bcg.jpeg";
import img2 from "../assets/hero-bcg-2.jpeg";
import styled from "styled-components";
const Hero = () => {
  return (
    <>
      <HeroContainer className="section-center">
        <div>
          <h1 className="title">Design Your Comfort Zone</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo veritatis quidem libero blanditiis voluptatibus, iusto facere.
            Blanditiis, dolores aperiam!
          </p>
          <Link className="btn" to="/products">
            Shop now
          </Link>
        </div>
        <div className="wrap-col">
          <div className="img-container">
            <img className="img1" src={img1} alt="" />
            <img className="img2" src={img2} alt="" />
          </div>
        </div>
      </HeroContainer>
    </>
  );
};

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 3rem 10rem 0;

  img {
    border-radius: 8px;
    width: 100%;
  }
  .img1 {
    margin-top: -100px;

    position: absolute;
    bottom: 0;
    right: -40px;
  }
  .img2 {
    position: absolute;
    bottom: 0;
    left: -40px;
    max-width: 250px;
  }
  .img-container {
    position: relative;
    text-align: right;
    height: 400px;
    width: 400px;
    max-height: 90%;
    background-color: var(--clr-primary-9);
  }
  .wrap-col {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  .title {
    font-size: 4rem;
    text-align: left;
    margin-bottom: 30px;
    font-weight: bold;
  }
  .text {
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 30px;
  }
  .btn {
    font-weight: bold;
    padding: 8px 20px;
  }
  @media (max-width: 1140px) {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
    padding: 10rem 3rem 10rem 0;
     {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 80px;
      justify-content: space-between;
      align-items: center;
      padding: 10rem 3rem 10rem 0;
    }
    .img-container,
    .wrap-col {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 5rem 0rem 5rem 0;
    .wrap-col,
    .img-container {
      display: none;
    }
    .title {
      font-size: 2.5rem;
      text-align: left;
      margin-bottom: 30px;
      font-weight: bold;
    }
  }
`;

export default Hero;
