import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_ERROR,
  ASYNC_ACTION_FINISH
} from "./asyncConstants";

// On async func start
export const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  };
};

// On async func finish
export const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  };
};

// On async func error
export const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  };
};
