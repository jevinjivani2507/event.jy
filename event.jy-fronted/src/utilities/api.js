import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import config from "../config";
import importAll from "./importAll";
import { EVENTS } from "../Redux/ActionTypes";

const api = async (dispatch) => {
    
  const response = await axios.get(config.URL_EVENT);
  // console.log(response);

  dispatch({
    type: EVENTS,
    payload: response.data,
  });
};

export default api;
