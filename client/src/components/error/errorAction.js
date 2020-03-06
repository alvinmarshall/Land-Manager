import { ON_ERROR_RECEIVE } from "./errorConstants";

export const setErrorStateAction = payload => {
  return {
    type: ON_ERROR_RECEIVE,
    payload
  };
};
