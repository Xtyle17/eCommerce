import React, { createContext, useReducer, useState, useEffect } from "react";
import { reducer, initialState } from "../reducer";
import { Products } from "../../Products/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [totals, setTotals] = useState(0);
  const [cartItemCounts, setCartItemCounts] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [productType, setProductType] = useState("");
  const [isClass, setIsClass] = useState({ pc: "webpc", phone: "phone" });
  const cartItemCount = state.cart.reduce(
    (acc, item) => (acc += item.count),
    0
  );

  const calculateTotal = () => {
    let total = totals;
    state.cart.map((item) => {
      const itemTotal = item.price * item.count;
      total += itemTotal;
    });
    // for (const item of state.cart) {
    //   const itemTotal = item.price * item.count;

    //   total += itemTotal;
    // }
    return total;
  };

  const getTotalQuantity = () => {
    let quantity = 0;
    state.cart.map((item) => {
      const quantityTotal = item.count;
      quantity += quantityTotal;
    });
    return quantity;
  };

  useEffect(() => {
    const filteredResult = Products.filter(
      (items) =>
        items.name.toLowerCase().includes(search.toLowerCase()) &&
        (productType.toLowerCase() === "" ||
          items.type.toLowerCase() === productType.toLowerCase())
    );
    setSearchResult(filteredResult);
  }, [search, productType]);
  return (
    <CartContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        state,
        dispatch,
        setCartItemCounts,
        isClass,
        setIsClass,
        cartItemCount,
        calculateTotal,
        getTotalQuantity,
        search,
        setSearch,
        searchResult,
        productType,
        setProductType,
      }}>
      {children}
    </CartContext.Provider>
  );
};
