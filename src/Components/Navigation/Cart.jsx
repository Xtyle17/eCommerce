import React, { useContext, useReducer } from "react";
import { reducer, initialState, ACTIONS } from "../reducer";
import { CartContext } from "../Provider/cartProvider";
import "../../Css/cart.css";
const Cart = () => {
  const { state, dispatch, calculateTotal, getTotalQuantity } =
    useContext(CartContext);
  const quantity = getTotalQuantity();
  const total = calculateTotal();
  const handleClick = (id) => {
    dispatch({ type: ACTIONS.REMOVE_CART, payload: id });
  };
  const handleIncrement = (id) => {
    dispatch({ type: ACTIONS.INCREMENT_QUANTITY, payload: { item: id } });
  };
  const handleDecrement = (id) => {
    dispatch({ type: ACTIONS.DECREMENT_QUANTITY, payload: { item: id } });
  };
  console.log(state.cart);

  return (
    <div>
      <div className="head">
        <h1>CART</h1>

        {state.cart.length ? (
          <div className="ttl">
            <span>Total: {`$${total}`}</span>
            <span>Total Items:{quantity} </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {state.cart.length ? (
          state.cart.map((item) => (
            <div key={item.id} className="cart">
              <div className="product">
                <img src={item.img[0]} alt={item.name} />
                <h2>{item.name}</h2>
              </div>
              <div className="side">
                <span>price:${item.price}</span>
                <span>total Price: ${item.price * item.count}</span>
                <span>quantity:{item.count}</span>
                <div className="functions">
                  <button
                    className="btn-decrement w-[25px] h-[20px]"
                    onClick={() => handleDecrement(item)}>
                    -
                  </button>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="prod-count px-2 hover:bg-red-600 transition duration-400 ease-in-out">
                    remove to cart
                  </button>
                  <button
                    className="btn-increment w-[25px] h-[20px]"
                    onClick={() => handleIncrement(item)}>
                    +
                  </button>
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
