import { toastr } from "react-redux-toastr";
import {
  GET_AUTHENTICATED_USER,
  USER_LOGOUT,
  CHECK_TOKEN_AVAIL
} from "./authConstants";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { setTokenHeader } from "../../../config";
import { setErrorAction } from "../../error/errorAction";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../async/asyncAction";

const HTTP_OK = 200;

// Authenticate user from remote service
export const loginAction = payload => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const response = await axios.post("/users/login", payload);
      const { status, data } = response.data;
      if (status === HTTP_OK) {
        const { token } = data;
        setTokenHeader(token);
        localStorage.setItem("token", JSON.stringify(token));
        toastr.success("Success!", `welcome back ${payload.username} `);
        const decode = jwt_decode(token, {});
        dispatch(setAuthUserStateAction(decode));
        dispatch(asyncActionFinish());
      }
    } catch (err) {
      console.log(err);
      dispatch(asyncActionError());
      dispatch(setErrorAction(err));
    }
  };
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
