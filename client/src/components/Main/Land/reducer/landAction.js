import { CREATE_LAND } from "./landConstants";

export const createLandAction = payload => dispatch => {
  dispatch({
    type: CREATE_LAND,
    payload
  });
};
