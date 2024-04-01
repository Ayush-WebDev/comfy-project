import React from "react";
import { TbLoader3 } from "react-icons/tb";
import styled from "styled-components";

const Loader = () => {
  return (
    <LoaderElement>
      <TbLoader3 className="loader" />
    </LoaderElement>
  );
};

const LoaderElement = styled.div`
  display: flex;
  background-color: white;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  .loader {
    width: 100px;
    height: 100px;
    color: var(--clr-primary-2);
    animation: 1s linear infinite loading;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Loader;
