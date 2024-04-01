import React from "react";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const { products } = useLoaderData();

  return (
    <>
      <FeaturedContainer>
        <div className="section-center">
          <h2 className="title">Featured Products</h2>
          <div className="product-container">
            {products.slice(0, 3).map((product, index) => {
              const { id, name, price, image } = product;
              return (
                <div className="card-container" key={index}>
                  <div className="img-product">
                    <img src={image} alt={name} />
                    <Link className="link" to={`/products/${id}`}>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="content">
                    <h4 className="name">{name}</h4>
                    <p className="price">${price / 100}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link className="btn" to="/products">
            View all products
          </Link>
        </div>
      </FeaturedContainer>
    </>
  );
};

const FeaturedContainer = styled.div`
  padding: 5rem 1rem 5rem;
  background-color: var(--clr-grey-10);
  text-align: center;
  .title {
    font-size: 3rem;
    font-weight: 600;
  }
  .product-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 40px;
    padding: 60px 0;
  }
  .products {
    padding: 3rem 0;
  }
  .card-container {
    width: 100%;
  }
  .img-product {
    width: 100%;
    height: 300px;
    position: relative;
    &:hover {
      background-color: rgba(0, 0, 0);
      border-radius: 8px;
    }

    img {
      height: 300px;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
    .link {
      position: absolute;
      top: 50%;
      left: 50%;
      color: white;
      transform: translate(-50%, -50%);
      background: var(--clr-primary-5);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      transition: var(--transition);
      opacity: 0;
      cursor: pointer;
    }
  }
  .img-product:hover img {
    opacity: 0.5;
    border-radius: 8px;
  }
  .img-product:hover .link {
    opacity: 1;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  .name,
  .price {
    font-size: 1.2rem;
    color: var(--clr-primary-6);
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    .product-container {
      gap: 40px;
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 2.5rem;
      font-weight: 600;
    }
    .img-product {
      height: 300px;
      img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default FeaturedProducts;
