import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { useFilterContext } from "../FilterContext";

const Filters = () => {
  const { state, dispatch } = useFilterContext();
  const { allProducts, loadingProducts } = state;
  const [priceVal, setPrice] = useState(3500);
  const [categoryCurr, setCategoryCurr] = useState("All");
  const [companyCurr, setCompanyCurr] = useState("All");
  const [colorCurr, setColorCurr] = useState("All");
  const [checkVal, setCheckVal] = useState(false);

  const categories = new Set([
    "All",
    ...allProducts?.map((product) => product.fields.category),
  ]);
  const companies = new Set([
    "All",
    ...allProducts?.map((product) => product.fields.company),
  ]);

  const colorsProduct = new Set([
    "All",
    ...allProducts?.map((product) => product.fields.colors).flat(),
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (event.target.getAttribute("name") === "category") {
      const nameCat = event.target.getAttribute("name");
      dispatch({
        type: "UPDATE_FILTERS",
        payload: {
          [nameCat]: event.target.getAttribute("value").toLowerCase(),
        },
      });
    }
    if (event.target.getAttribute("name") === "color") {
      const nameCol = event.target.getAttribute("name");
      dispatch({
        type: "UPDATE_FILTERS",
        payload: {
          [nameCol]: event.target.getAttribute("value").toLowerCase(),
        },
      });
    } else {
      dispatch({
        type: "UPDATE_FILTERS",
        payload: {
          [name]: [name] != "shipping" ? value : event.target.checked,
        },
      });
    }
    dispatch({ type: "FILTER_PRODUCTS" });
  };

  return (
    <>
      <FiltersWrapper>
        <form action="">
          <div
            style={{
              textAlign: "right",
              cursor: "pointer",
              fontSize: 12,
              marginBottom: "10px",
            }}
          >
            <div
              className="link-btn"
              onClick={() => {
                window.location.reload();
              }}
            >
              Clear Filters
            </div>
          </div>

          <input
            className="filter-search"
            type="text"
            name="text"
            placeholder="Search"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <div className="filter-box">
            <h4>Category</h4>
            <div className="category-wrap">
              {[...categories]
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => {
                  return (
                    <div
                      className="btn-filter"
                      key={index}
                      name="category"
                      value={category}
                      style={{
                        textDecoration:
                          categoryCurr === category && "underline",
                        fontWeight: categoryCurr === category && "700",
                      }}
                      onClick={(event) => {
                        setCategoryCurr(category);
                        handleChange(event);
                      }}
                    >
                      {category}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="filter-box">
            <h4>Company</h4>
            <select
              className="select-company"
              name="company"
              id="company"
              onChange={(event) => {
                setCompanyCurr(company);
                handleChange(event);
              }}
            >
              {[...companies]
                .sort((a, b) => a.localeCompare(b))
                .map((company, index) => {
                  return (
                    <option key={index} name="company" value={company}>
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
                    <div
                      key={index}
                      name="color"
                      className="link-btn"
                      value={color}
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        textDecoration:
                          colorCurr === color ? "underline" : null,
                      }}
                      onClick={(event) => {
                        setColorCurr(color);
                        handleChange(event);
                      }}
                    >
                      {color}
                    </div>
                  );
                }
                return (
                  <div
                    key={index}
                    name="color"
                    value={color}
                    style={{
                      backgroundColor: color,
                      width: "20px",
                      height: "20px",
                      borderRadius: "100%",
                      cursor: "pointer",
                      border: "none",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onClick={(event) => {
                      setColorCurr(color);
                      handleChange(event);
                    }}
                  >
                    <BsCheck
                      style={{
                        display: colorCurr === color ? "block" : "none",
                        color: "#fff",
                        fontSize: "16px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="filter-box">
            <h4>Shipping</h4>
            <div className="shipping-box">
              <label htmlFor="shipping">Free Shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                checked={checkVal}
                onChange={(event) => {
                  setCheckVal(!checkVal);
                  handleChange(event);
                }}
              />
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
              name="rangePrice"
              id="range-price"
              min={"0"}
              max={"4000"}
              step={"100"}
              value={priceVal}
              onChange={(event) => {
                setPrice(event.target.value);
                handleChange(event);
              }}
            />
          </div>
        </form>
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
    font-size: 16px;
    color: var(--clr-grey-3);
    margin-bottom: 10px;
  }
  .link-btn {
    border: none;
    background: none;
    color: var(--clr-red-dark);
    padding: 0;
    font-size: 12px;
  }
  .select-company {
    width: auto;
    height: 30px;
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
    justify-content: flex-start;
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
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--clr-grey-4);
  }
  .filter-box {
    margin: 30px 0;
  }
  .price-range {
    width: 100%;
  }
  .filter-search {
    width: 100%;
    height: 30px;
    border-radius: 3px;
    padding: 0 15px;
    border: 1px solid var(--clr-grey-4);
    color: black;
  }
  .category-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
  }
  label {
    font-size: 14px;
  }
`;

export default Filters;
