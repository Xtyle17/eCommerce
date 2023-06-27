import React, { createContext, useReducer, useRef, useState } from "react";
import { reducer, initialState } from "../reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const countRef = useRef(0);
  const [cartItemCounts, setCartItemCounts] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const cartItemCount = state.cart.reduce(
    (acc, data) => (acc += data.count),
    0
  );
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        setCartItemCounts,
        cartItemCounts,
        cartItemCount,
      }}>
      {children}
    </CartContext.Provider>
  );
};
