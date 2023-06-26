import React, { useContext, useReducer } from "react";
import { reducer, initialState } from "../reducer";
import { CartContext } from "../Provider/cartProvider";

const Cart = () => {
  const { state } = useContext(CartContext);
  console.log(state.cart);
  return (
    <div>
      <h1>CART</h1>
      <div>
        {state.cart.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
