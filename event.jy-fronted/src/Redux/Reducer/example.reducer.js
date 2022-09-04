import { REDUX } from "../ActionTypes";

export const cart = (
  state = {
    items: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART: {
      localStorage.setItem(
        "cart",
        JSON.stringify([...state.items, action.payload])
      );
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
      };
    }

    default:
      return state;
  }
};
