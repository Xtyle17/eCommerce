import React, { useContext, useReducer } from "react";
import { reducer, initialState, ACTIONS } from "../reducer";
import { CartContext } from "../Provider/cartProvider";
import "../../Css/cart.css";
const Cart = () => {
  const { state, dispatch, setCartItemCounts } = useContext(CartContext);
  const handleClick = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART, payload: id });
  };
  console.log(state.cart);
  const items = state.cart.map((item) => item);
  return (
    <div>
      <h1>CART</h1>
      <div>
        {state.cart.length ? (
          state.cart.map((item) => (
            <div key={item.id} className="cart">
              <div className="product">
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
              </div>
              <div className="side">
                <span>price:${item.price}</span>
                <span>total Price: ${item.price * item.count}</span>
                <span>count:{item.count}</span>
                <div className="functions">
                  <button className="btn-decrement">-</button>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="prod-count">
                    remove to cart
                  </button>
                  <button className="btn-increment">+</button>
                </div>
              </div>
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
