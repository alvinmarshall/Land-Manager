import { CREATE_LAND, CREATE_LAND_TYPE } from "./landConstants";

export const createLandAction = payload => dispatch => {
  dispatch({
    type: CREATE_LAND,
    payload
  });
};

export const createLandTypeAction = payload => dispatch => {
  dispatch({
    type: CREATE_LAND_TYPE,
    payload
  });
};
