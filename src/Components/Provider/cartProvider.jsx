import React, { createContext, useReducer, useRef, useState } from "react";
import { reducer, initialState } from "../reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const countRef = useRef(0);
  const [totals, setTotals] = useState(0);
  const [cartItemCounts, setCartItemCounts] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
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
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        setCartItemCounts,
        cartItemCounts,
        cartItemCount,
        calculateTotal,
        getTotalQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
