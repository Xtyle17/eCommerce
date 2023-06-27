import React, { useContext, useReducer } from "react";
import { reducer, initialState, ACTIONS } from "../reducer";
import { CartContext } from "../Provider/cartProvider";
import "../../Css/cart.css";
const Cart = () => {
  const { state, dispatch, setCartItemCounts } = useContext(CartContext);
  const handleClick = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART, payload: id });
    setCartItemCounts((prev) => prev - 1);
  };
  console.log(state.cart);

  return (
    <div>
      <h1>CART</h1>
      <div>
        {state.cart.length ? (
          state.cart.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <button onClick={() => handleClick(item.id)}>
                remove to cart
              </button>
            </div>
          ))
        ) : (
          <p>no items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
