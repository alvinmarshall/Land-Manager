import { ON_ERROR_RECEIVE } from "./errorConstants";

export const setErrorAction = payload => {
  return {
    type: ON_ERROR_RECEIVE,
    payload
  };
};
