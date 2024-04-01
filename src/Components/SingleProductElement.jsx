import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import styled from "styled-components";
import AddToCart from "./AddToCart";
import { formatPrice } from "../utils";
import ImageBox from "./ImageBox";
import { BsStar, BsStarFill, BsStarHalf, BsCheck } from "react-icons/bs";
const SingleProductElement = () => {
  const { product } = useLoaderData();

  const {
    category,
    company,
    id,
    images,
    colors,
    reviews,
    name,
    description,
    price,
    stock,
    stars,
  } = product;
  const [currentColor, setCurrentColor] = useState(colors[0]);

  return (
    <>
      <ProductContainer className="section-center">
        <div>
          <Link className="btn" to="/products">
            Back to products
          </Link>
        </div>
        <div className="container-product">
          <div className="col-1">
            <ImageBox images={images} />
          </div>
          <div>
            <h2 className="name">{name}</h2>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => {
                const number = index + 0.5;
                return stars >= index + 1 ? (
                  <BsStarFill className="star" />
                ) : stars >= number ? (
                  <BsStarHalf className="star" />
                ) : (
                  <BsStar className="star" />
                );
              })}
            </div>
            <h3 className="price">{formatPrice(price)}</h3>
            <p className="description">{description}</p>
            <div className="stock-container">
              <h4 className="c-1">Available:</h4>
              <h4 className="c-2">{stock > 0 ? "In stock" : "NA"}</h4>
            </div>
            <div className="stock-container">
              <h4 className="c-1">SKU:</h4>
              <h4 className="c-2">{id}</h4>
            </div>
            <div className="stock-container">
              <h4 className="c-1">Brand:</h4>
              <h4 className="c-2">{company}</h4>
            </div>
            <div className="divider"></div>
            <div>
              <div className="stock-container">
                <h4 className="c-1">Color:</h4>
                <div className="color-box">
                  {colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          backgroundColor: color,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        className="colormain"
                        onClick={() => {
                          setCurrentColor(color);
                        }}
                      >
                        <BsCheck
                          style={{
                            display: currentColor === color ? "block" : "none",
                            color: "#fff",
                            fontSize: "25px",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <AddToCart productDetails={{ product, currentColor }} />
          </div>
        </div>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled.div`
  padding: 5rem 0;
  .col-1 {
    width: 100%;
  }
  .colormain {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  .color-box {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }
  .container-product {
    padding: 4rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  img {
    width: 100%;
  }
  .stars {
    margin-bottom: 10px;
  }
  .name {
    font-size: 4rem;
    margin-bottom: 8px;
  }
  .price {
    font-size: 24px;
    color: var(--clr-primary-6);
    margin-bottom: 20px;
  }
  .description {
    font-size: 18px;
    color: black;
  }
  .star {
    color: var(--clr-primary-3);
  }
  .stock-container {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    .c-1 {
      font-size: 16px;
      margin: 0;
    }
    .c-2 {
      color: var(--clr-primary-6);
      font-size: 16px;
      margin: 0;
    }
  }
  .divider {
    width: 100%;
    height: 2px;
    background-color: var(--clr-grey-5);
    margin: 15px 0;
  }
  @media (max-width: 768px) {
    .container-product {
      padding: 4rem 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 40px;
    }
    .name {
      font-size: 2.5rem;
    }
    .col-1 {
      grid-row-start: 2;
    }
  }
`;

export default SingleProductElement;
