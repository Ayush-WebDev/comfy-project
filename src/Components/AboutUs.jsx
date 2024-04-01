import React from "react";
import img from "../assets/hero-bcg.jpeg";
import styled from "styled-components";
const AboutUs = () => {
  return (
    <>
      <AboutUsContainer className="section-center">
        <div>
          <img src={img} alt="about" />
        </div>
        <div>
          <h2>Our story</h2>
          <div className="divider"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eum quasi deleniti beatae voluptatem placeat officia ratione tenetur
            omnis accusantium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur eum quasi deleniti beatae voluptatem
            placeat officia ratione tenetur omnis accusantium!
          </p>
        </div>
      </AboutUsContainer>
    </>
  );
};

const AboutUsContainer = styled.div`
  padding: 5rem 0;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  justify-content: center;
  gap: 40px;
  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 15px;
  }
  h2 {
    color: var(--clr-primary-3);
    font-size: 3rem;
  }
  p {
    font-size: 1.2rem;
    color: var(--clr-grey-6);
    margin-top: 40px;
  }
  .divider {
    width: 20%;
    height: 5px;
    margin-top: 15px;
    background-color: var(--clr-red-dark);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default AboutUs;
