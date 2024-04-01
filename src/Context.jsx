import React, { useContext, useState, useReducer, useEffect } from "react";
import { cartReducer } from "./Reducers/cartReducer";
import { useAuth0 } from "@auth0/auth0-react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const getProducts = () => {
    if (localStorage.getItem("products")) {
      return {
        total: JSON.parse(localStorage.getItem("products")).total,
        numOfProducts: JSON.parse(localStorage.getItem("products"))
          .numOfProducts,
        totalAmount: JSON.parse(localStorage.getItem("products")).totalAmount,
        product: JSON.parse(localStorage.getItem("products")).product,
      };
    }
    return { total: 0, numOfProducts: 0, totalAmount: 0, product: [] };
  };
  getProducts();
  const initialState = {
    total: getProducts().total,
    numOfProducts: getProducts().numOfProducts,
    totalAmount: getProducts().totalAmount,
    shipping: 25,
    product: getProducts().product,
  };
  const taxAmount = 25;
  const [isSidebarOpen, setSidebar] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { isAuthenticated, isLoading, loginWithRedirect, user, logout } =
    useAuth0();

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state));
  }, [state.product]);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setSidebar,
        state,
        dispatch,
        taxAmount,
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
