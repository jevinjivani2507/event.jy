import events from "../../JSON/events";
import { USER, EVENTS } from "../ActionTypes";

export const username = (
  state = {
    user: "",
    events: [],
  },
  action
) => {
  switch (action.type) {
    case USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case EVENTS: {
      return {
        ...state,
        events: action.payload,
      };
    }
    default:
      return state;
  }
};
