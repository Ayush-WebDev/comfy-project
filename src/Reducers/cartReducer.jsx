export const cartReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART":
      const newTotal = state.numOfProducts + 1;
      return { ...state, numOfProducts: newTotal };
    case "ADD_TO_CART":
      const existingProduct = state.product.find(
        (newProd) => newProd.cartID === action.payload.cartID
      );

      if (existingProduct) {
        const newArr = state.product.map((prod) => {
          if (prod.cartID === action.payload.cartID) {
            let newTotal = prod.numCart + action.payload.numCart;
            return { ...prod, numCart: newTotal };
          }
          return prod;
        });
        return {
          ...state,
          numOfProducts: state.numOfProducts + action.payload.numCart,
          totalAmount:
            state.totalAmount +
            action.payload.numCart * (action.payload.product.price / 100),
          product: newArr,
        };
      } else {
        const newNum = [...state.product, action.payload].reduce(
          (totalProducts, productCurr) => {
            let { numCart, product } = productCurr;
            totalProducts.totalItems = totalProducts.totalItems + numCart;
            totalProducts.totalAmount =
              totalProducts.totalAmount + numCart * (product.price / 100);
            return totalProducts;
          },
          {
            totalItems: 0,
            totalAmount: 0,
          }
        );

        return {
          ...state,
          product: [...state.product, action.payload],
          total: 0,
          numOfProducts: newNum.totalItems,
          totalAmount: newNum.totalAmount,
          taxAmount: 0,
          shipping: 0,
        };
      }
    case "INC_CART":
      const { cartID, price } = action.payload;
      const productUpdated = state.product.map((prod) => {
        if (prod.cartID === cartID) {
          let newTotal = prod.numCart + 1;
          return { ...prod, numCart: newTotal };
        }
        return prod;
      });
      return {
        ...state,
        product: productUpdated,
        numOfProducts: state.numOfProducts + 1,
        totalAmount: state.totalAmount + price / 100,
      };
    case "DEC_CART":
      const { cartID: decCartID, price: decPrice } = action.payload;
      const decProd = state.product.map((prod) => {
        if (prod.cartID === decCartID) {
          let newTotal = prod.numCart - 1;
          return { ...prod, numCart: newTotal };
        }
        return prod;
      });
      return {
        ...state,
        product: decProd,
        numOfProducts: state.numOfProducts - 1,
        totalAmount: state.totalAmount - decPrice / 100,
      };
    case "CLEAR_CART":
      return {
        total: 0,
        numOfProducts: 0,
        totalAmount: 0,
        taxAmount: 0,
        shipping: 0,
        product: [],
      };

    case "REMOVE_ITEM":
      const {
        cartID: cartDelID,
        price: newPrice,
        numCart: numCartDel,
      } = action.payload;
      const newArr = state.product.filter((prod) => prod.cartID != cartDelID);
      return {
        ...state,
        product: newArr,
        numOfProducts: state.numOfProducts - numCartDel,
        totalAmount: state.totalAmount - (newPrice / 100) * numCartDel,
      };
    default:
      return state;
  }
};
