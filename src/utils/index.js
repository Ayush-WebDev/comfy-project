import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://course-api.com",
});

export const productsFetch = axios.create({
  baseURL: "https://api.airtable.com/v0/appAljNgQztiwJRxR/Imported%20table",
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
