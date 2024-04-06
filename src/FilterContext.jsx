import React, { useReducer, useEffect, useState } from "react";
import { filterReducer } from "./Reducers/filterReducer";
import { useContext } from "react";
import { productsFetch } from "./utils";
const FilterContext = React.createContext();

const FilterProvider = ({ children }) => {
  const fetchProducts = async () => {
    try {
      const prods = await productsFetch("/", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_ID}`,
        },
      });
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: {
          loadedProducts: prods.data.records,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const initialState = {
    allProducts: [],
    filteredProducts: [],
    loadingProducts: true,
    filters: {
      text: "",
      company: "",
      category: "",
      color: "",
      shipping: false,
      rangePrice: 0,
    },
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
        fetchProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
