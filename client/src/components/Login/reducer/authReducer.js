import createReducer from "../../../app/reducer/reducerUtil";
import isEmpty from "lodash/isEmpty";
import {
  GET_AUTHENTICATED_USER,
  USER_LOGOUT,
  CHECK_TOKEN_AVAIL
} from "./authConstants";

const initialState = {
  isAuthenticated: false,
  user: {}
};

// GET LOGIN USER PAYLOAD
const getAuthUser = (state, payload) => {
  return {
    ...state,
    user: payload,
    isAuthenticated: !isEmpty(payload)
  };
};



//REMOVE USER PAYLOAD
const logoutUser = (state, payload) => {
  return { ...state, user: payload || {}, isAuthenticated: !isEmpty(payload) };
};

const findTokenInStorage = (state, payload) => {
  return { ...state, isAuthenticated: payload || false };
};

export default createReducer(initialState, {
  [GET_AUTHENTICATED_USER]: getAuthUser,
  [USER_LOGOUT]: logoutUser,
  [CHECK_TOKEN_AVAIL]: findTokenInStorage
});
