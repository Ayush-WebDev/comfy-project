import React, { useState } from "react";
import styled from "styled-components";
import { Form, useLoaderData } from "react-router-dom";
const Filters = () => {
  const { products } = useLoaderData();
  const [priceVal, setPrice] = useState(3000);

  const categories = new Set([
    "All",
    ...products.map((product) => product.category),
  ]);
  const companies = new Set([
    "All",
    ...products.map((product) => product.company),
  ]);

  const colorsProduct = new Set([
    "All",
    ...products.map((product) => product.colors).flat(),
  ]);

  return (
    <>
      <FiltersWrapper>
        <Form>
          <h4>Search </h4>
          <input className="filter-search" type="search" placeholder="Search" />
          <div className="filter-box">
            <h4>Category</h4>
            <div className="category-wrap">
              {[...categories].map((category, index) => {
                return (
                  <button className="btn-filter" key={index}>
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="filter-box">
            <h4>Company</h4>
            <select className="select-company" name="company" id="">
              {[...companies].map((company, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="filter-box ">
            <h4>Colors</h4>
            <div className="colors-select">
              {[...colorsProduct].map((color, index) => {
                if (index === 0) {
                  return (
                    <button key={index} className="link-btn">
                      {color}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                      border: "none",
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="filter-box">
            <h4>Shipping</h4>
            <div className="shipping-box">
              <label htmlFor="shipping">Free Shipping</label>
              <input type="checkbox" name="shipping" id="shipping" />
            </div>
          </div>
          <div>
            <h4>Price </h4>
            <label htmlFor="range-price">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(priceVal)}
            </label>
            <input
              type="range"
              className="price-range"
              name="range-price"
              id="range-price"
              min={"0"}
              max={"6000"}
              step={"100"}
              value={priceVal}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="filter-box">
            <a href="#" className="link-btn">
              Clear Filters
            </a>
            <button
              style={{ marginTop: "20px", width: "100%" }}
              type="submit"
              className="btn-red"
            >
              Filter
            </button>
          </div>
        </Form>
      </FiltersWrapper>
    </>
  );
};

const FiltersWrapper = styled.div`
  max-height: 95vh;
  padding-right: 10px;
  overflow: auto;
  h4 {
    margin-top: 20px;
    font-size: 24px;
    color: var(--clr-primary-3);
    margin-bottom: 20px;
  }
  .link-btn {
    border: none;
    background: none;
    color: var(--clr-primary-3);
    text-decoration: underline;
    padding: 0;
    font-size: 16px;
  }
  .select-company {
    width: 100%;
    height: 40px;
  }
  .shipping-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .colors-select {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-bottom: -7px;
  }
  width: 100%;
  .btn-filter {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    padding: 0 10px;
    text-transform: capitalize;
    color: var(--clr-primary-3);
  }
  .filter-box {
    margin: 40px 0;
  }
  .price-range {
    width: 100%;
  }
  .filter-search {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border: 1px solid var(--clr-primary-4);
    color: black;
  }
  .category-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export default Filters;
