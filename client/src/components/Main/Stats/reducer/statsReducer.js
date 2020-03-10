import createReducer from "../../../../app/reducer/reducerUtil";
import { FETCH_TOTAL_LAND } from "./statsConstants";

const initialState = {
  totalLand: 0
};

const fetchLand = (state, payload) => {
  return { ...state, totalLand: payload || 0 };
};

export default createReducer(initialState, {
  [FETCH_TOTAL_LAND]: fetchLand
});
