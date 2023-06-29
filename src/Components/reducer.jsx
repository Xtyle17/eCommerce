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
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === action.payload.item.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem.id === action.payload.item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.item, count: 1 }],
        };
      }
    case ACTIONS.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case ACTIONS.ADD_COUNT:
      return { ...state, cart: [...state.cart, action.count] };

    case ACTIONS.INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        ),
      };

    case ACTIONS.DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === action.payload.item.id
            ? {
                ...cartItem,
                count: cartItem.count > 1 ? cartItem.count - 1 : 1,
              }
            : cartItem
        ),
      };
    default:
      return state;
  }
};
