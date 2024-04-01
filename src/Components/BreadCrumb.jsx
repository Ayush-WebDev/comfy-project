import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BreadCrumb = ({ page, url }) => {
  return (
    <>
      <BreadCrumbContainer>
        <div className="breadlink section-center">
          <h2>
            <Link to="/">Home</Link>
          </h2>
          <h2>/</h2>
          <h2>
            <Link className="page-link" to={url}>
              {page}
            </Link>
          </h2>
        </div>
      </BreadCrumbContainer>
    </>
  );
};

const BreadCrumbContainer = styled.div`
  padding: 3rem;
  background-color: var(--clr-primary-10);
  .breadlink {
    display: flex;
    flex-direction: row;
    gap: 15px;

    justify-content: start;
    color: var(--clr-primary-4);
    align-items: center;
    h2 {
      font-size: 2rem;
    }
    a {
      color: var(--clr-primary-4);
    }
  }
  .page-link {
    color: var(--clr-primary-1) !important;
  }
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    .breadlink {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default BreadCrumb;
