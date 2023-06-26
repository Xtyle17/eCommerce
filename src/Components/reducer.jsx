import { Products } from "../Products/products";

export const initialState = {
  products: Products,
  cart: [],
  quantity: 0,
};
export const ACTIONS = {
  ADD_CART: "add_cart",
  REMOVE_CART: "remove_cart",
  INCREMENT_QUANTITY: "increment_quantity",
  DECREMENT_QUANTITY: "decrement_quantity",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ACTIONS.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
