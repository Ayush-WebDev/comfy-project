import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../FilterContext";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState";
const RowLayout = () => {
  const {
    state: { filteredProducts },
  } = useFilterContext();

  return (
    <>
      <RowProducts>
        {filteredProducts.length < 1 ? (
          <EmptyState />
        ) : (
          filteredProducts?.map((product, index) => {
            const { id, name, price, image, description } = product.fields;
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
                  <p>{`${description.substr(0, 100)}... `}</p>
                  <Link className="btn" to={`/products/${id}`}>
                    Details
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </RowProducts>
    </>
  );
};

const RowProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  padding: 5rem 3rem;
  .title {
    font-size: 1.8rem;
    color: var(--clr-grey-3);
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
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    gap: 30px;
    width: 100%;
  }
  .img-product {
    width: 100%;
    height: 300px;
    position: relative;
    object-fit: cover;
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
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    align-items: flex-start;
    padding: 20px 0;
  }

  .price {
    font-size: 1rem;
    color: var(--clr-primary-6);
    margin-bottom: 0;
  }
  .name {
    font-size: 2.2rem;
    color: var(--clr-grey-3);
    margin-bottom: 0;
  }
`;

export default RowLayout;
