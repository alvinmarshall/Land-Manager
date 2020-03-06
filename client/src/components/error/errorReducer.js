import createReducer from "../../app/reducer/reducerUtil";
import { ON_ERROR_RECEIVE } from "./errorConstants";

const initialState = {
  errors: []
};

const receiveError = (state, payload) => {
  return { ...state, errors: payload };
};
export default createReducer(initialState, {
  [ON_ERROR_RECEIVE]: receiveError
});
