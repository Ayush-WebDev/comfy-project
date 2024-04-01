import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
  return (
    <>
      <ErrorContainer>
        <h1 className="title">404</h1>
        <h3 className="text">Page your are looking for doesn't exist!</h3>
        <Link className="btn" to="/">
          Go back to home
        </Link>
      </ErrorContainer>
    </>
  );
};

export default Error;

const ErrorContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--clr-primary-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .title {
    font-size: 10rem;
    line-height: 100%;
    font-weight: 800;
  }
  .text {
    font-size: 2rem;
    line-height: 150%;
    margin-bottom: 30px;
  }
`;
