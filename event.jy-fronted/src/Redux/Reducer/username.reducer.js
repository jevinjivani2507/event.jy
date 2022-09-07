
import { USER } from "../ActionTypes";


export const username = (
  state = {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : "Jevin",
  },
  action
) => {
  switch (action.type) {
    case USER: {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
