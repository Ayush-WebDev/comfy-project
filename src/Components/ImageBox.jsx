import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
const ImageBox = ({ images }) => {
  const [imageNew, setImage] = useState(images[0].url);
  return (
    <>
      <img className="product-main-img" src={imageNew} />
      <ImageContainer>
        {images.map((image, index) => {
          return (
            <img
              className="imgbox-product"
              key={index}
              src={image.url}
              onClick={() => {
                setImage(image.url);
              }}
              style={{
                border:
                  imageNew === image.url
                    ? "solid 2px brown"
                    : "solid 2px transparent",
              }}
            />
          );
        })}
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  gap: 10px;
  .imgbox-product {
    max-width: 17%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export default ImageBox;
