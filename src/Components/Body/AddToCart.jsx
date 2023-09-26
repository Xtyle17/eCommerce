import React, { useRef, useEffect, useContext } from "react";
import { ACTIONS, reducer } from "../reducer";
import { initialState } from "../reducer";
import { Products } from "../../Products/products";
import { CartContext } from "../Provider/cartProvider";
const AddToCart = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  const buttonRef = useRef(null);
  const handleClick = (item) => {
    dispatch({ type: ACTIONS.ADD_CART, payload: { item: item } });
  };

  return (
    <div>
      <button
        ref={buttonRef}
        type="submit"
        className="border-1 border-black p-1 bg-gray-600 text-white"
        onClick={() => handleClick(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
