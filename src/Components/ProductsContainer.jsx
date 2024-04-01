import React, { useState } from "react";
import GridLayout from "./GridLayout";
import RowLayout from "./RowLayout";
import Filters from "./Filters";
import styled from "styled-components";
import { BsGrid, BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
const ProductsContainer = () => {
  const [layout, setLayout] = useState("grid");
  const { products } = useLoaderData();
  const sortProducts = [
    "Price (Lowest)",
    "Price (Highest)",
    "Name (A-Z)",
    "Name (Z-A)",
  ];
  return (
    <>
      <ProductLayout className="section-center">
        <div className="product-layout"></div>
        <div className="row-container">
          <div className="icons-group">
            <div className="icons">
              <BsGrid
                className="btn-icon"
                style={{
                  backgroundColor: layout === "grid" && "#5f4435",
                  color: layout === "grid" && "#fff",
                }}
                onClick={() => {
                  setLayout("grid");
                }}
              />
              <BsList
                className="btn-icon"
                style={{
                  backgroundColor: layout != "grid" && "#5f4435",
                  color: layout != "grid" && "#fff",
                }}
                onClick={() => {
                  setLayout("row");
                }}
              />
            </div>
            <div>{`${products.length} products found`}</div>
            <div className="divider-center"></div>
            <div className="sort-group">
              <p>Sort by:</p>
              <div>
                <select className="sort-select" name="sort" id="sort">
                  {sortProducts.map((sort, index) => {
                    return <option key={index}>{sort}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div>{layout === "grid" ? <GridLayout /> : <RowLayout />}</div>
        </div>
      </ProductLayout>
    </>
  );
};

const ProductLayout = styled.div`
  padding: 5rem 0;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: start;
  gap: 40px;
  p {
    margin-bottom: 0;
  }
  .row-container {
    width: 100%;
  }
  .sort-select {
    font-size: 16px;
    border: none;
  }
  .divider-center {
    width: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    height: 3px;
  }
  .icons {
    gap: 8px;
    display: flex;
    flex-direction: row;
  }
  .product-layout {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  .btn-icon {
    border: 1px solid var(--clr-primary-2);
    color: var(--clr-primary-2);
    border-radius: 3px;
    width: 30px;
    height: 30px;
    padding: 3px;
  }
  .icons-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
  .sort-group {
    display: flex;
    flex-direction: row;

    gap: 10px;
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 1.5rem;
    position: static;
    .product-layout {
      position: static;
      max-height: 20vh;
      overflow-y: auto;
    }
    .divider-center {
      display: none;
    }
    .icons-group {
      flex-wrap: wrap;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default ProductsContainer;
