import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://course-api.com",
});

export const formatPrice = (price) => {
  const priceNew = `$ ${price / 100}`;
  return priceNew;
};

export const cartItems = (num) => {
  const numOfItems = Array.from({ length: num }, (_, index) => {
    return index + 1;
  });
  return numOfItems;
};
