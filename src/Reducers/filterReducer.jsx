export const filterReducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    const { loadedProducts } = action.payload;
    return {
      ...state,
      allProducts: loadedProducts,
      loadingProducts: false,
      filteredProducts: loadedProducts,
    };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { filteredProducts } = state;
    const { sortVal } = action.payload;
    if (sortVal === "Price (Lowest)") {
      filteredProducts.sort((a, b) => {
        return a.fields.price - b.fields.price;
      });
    }
    if (sortVal === "Price (Highest)") {
      filteredProducts.sort((a, b) => {
        return b.fields.price - a.fields.price;
      });
    }
    if (sortVal === "Name (A-Z)") {
      filteredProducts.sort((a, b) => {
        return a.fields.name.localeCompare(b.fields.name);
      });
    }
    if (sortVal === "Name (Z-A)") {
      filteredProducts.sort((a, b) => {
        return b.fields.name.localeCompare(a.fields.name);
      });
    }
    return { ...state };
  }
  if (action.type === "UPDATE_FILTERS") {
    return { ...state, filters: { ...state.filters, ...action.payload } };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { text, company, category, shipping, rangePrice, color } =
      state.filters;
    const { allProducts } = state;
    let tempProducts = [...allProducts];

    if (text) {
      tempProducts = tempProducts.filter((prod) =>
        prod.fields.name.toLowerCase().startsWith(text)
      );
    }
    if (company && company !== "All") {
      tempProducts = tempProducts.filter(
        (prod) => prod.fields.company === company
      );
    }

    if (category && category !== "all") {
      tempProducts = tempProducts.filter(
        (prod) => prod.fields.category === category
      );
    }
    if (shipping == true) {
      tempProducts = tempProducts.filter(
        (prod) => prod.fields.shipping === "TRUE"
      );
    }

    if (rangePrice) {
      tempProducts = tempProducts.filter(
        (prod) => prod.fields.price / 100 <= rangePrice
      );
    }
    if (color && color !== "all") {
      tempProducts = tempProducts.filter((prod) =>
        prod.fields.colors.find((c) => c === color)
      );
    }
    return { ...state, filteredProducts: tempProducts };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        text: "",
        company: "All",
        category: "all",
        color: "All",
        shipping: false,
        rangePrice: 4000,
      },
    };
  }
  return { ...state };
};
