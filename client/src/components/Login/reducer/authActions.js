import {
  GET_AUTHENTICATED_USER,
  IS_LOADING,
  USER_LOGOUT,
  CHECK_TOKEN_AVAIL
} from "./authConstants";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setErrorStateAction } from "../../error/errorAction";

const HTTP_OK = 200;


// Authenticate user from remote service
export const loginAction = payload => dispatch => {
  dispatch({ type: IS_LOADING, payload: true });
  axios
    .post("/users/login", payload)
    .then(resp => {
      const { status, data } = resp.data;
      if (status === HTTP_OK) {
        const { token } = data;
        localStorage.setItem("token", JSON.stringify(token));
        const decode = jwt_decode(token, {});
        dispatch({ type: IS_LOADING });
        dispatch(setAuthUserStateAction(decode));
      }
    })
    .catch(err => {
      dispatch({ type: IS_LOADING });
      dispatch(setErrorStateAction(err));
    });
};

export const logoutAction = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: USER_LOGOUT
  });
};

export const checkTokenInStorageAction = () => dispatch => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    dispatch({ type: CHECK_TOKEN_AVAIL });
  }
};

export const setAuthUserStateAction = payload => {
  return { type: GET_AUTHENTICATED_USER, payload };
};
