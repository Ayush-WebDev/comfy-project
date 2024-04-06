import React from "react";
import styled from "styled-components";
const EmptyState = () => {
  return (
    <>
      <EmptyStateWrapper>
        <h4>No products matched the query</h4>
      </EmptyStateWrapper>
    </>
  );
};

const EmptyStateWrapper = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
`;

export default EmptyState;
