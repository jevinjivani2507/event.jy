import { createStore, combineReducers } from "redux";

import { username } from "./Reducer/username.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ username }),
  );

  return store ;
};