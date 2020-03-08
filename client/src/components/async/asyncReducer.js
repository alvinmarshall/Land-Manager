import createReducer from "../../app/reducer/reducerUtil";
import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR
} from "./asyncConstants";

const initialState = {
  loading: false
};

// set load state to true on start
const asyncStarted = (state, payload) => {
  return { ...state, loading: payload || true };
};

// set load state to false on finish
const asyncFinished = (state, payload) => {
  return { ...state, loading: payload || false };
};

// set load state to false on error
const asyncError = (state, payload) => {
  return { ...state, loading: payload || false };
};

export default createReducer(initialState, {
  [ASYNC_ACTION_START]: asyncStarted,
  [ASYNC_ACTION_FINISH]: asyncFinished,
  [ASYNC_ACTION_ERROR]: asyncError
});
