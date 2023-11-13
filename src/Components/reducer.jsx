import { Products } from "../Products/products";

export const initialState = {
  products: Products,
  cart: [],
  quantity: 0,
};
export const ACTIONS = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
  HANDLE_CHECK: "HANDLE_CHECK",
  INCREMENT_QUANTITY: "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY: "DECREMENT_QUANTITY",
};

export const reducer = (state, action) => {
  switch (action.type) {
    //logic for adding count whenever adding to cart
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
          cart: [
            ...state.cart,
            { ...action.payload.item, count: 1, checked: false },
          ],
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

    case ACTIONS.HANDLE_CHECK:
      console.log(action.payload.id);
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                checked: !item.checked,
              }
            : item
        ),
      };

    default:
      return state;
  }
};
