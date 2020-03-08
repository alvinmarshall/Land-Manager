import axios from "axios";
import { toastr } from "react-redux-toastr";
import { CREATE_LAND_TYPE, FETCH_ALL_LANDS } from "./landConstants";
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish
} from "../../../async/asyncAction";
import { setErrorAction } from "../../../error/errorAction";

const HTTP_OK = 200;
const HTTP_CREATED = 201;

//#region Create new land
// Create new land
export const createLandAction = payload => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const response = await axios.post("/land", payload);
      const { status } = response.data;
      if (status === HTTP_CREATED) {
        toastr.success("Created!", "Land created successful");
      }
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError());
      dispatch(setErrorAction(err));
    }
  };
};
//#endregion

// Add a custom land type to available land types
export const createLandTypeAction = payload => {
  return async dispatch => {
    dispatch(asyncActionStart());
    dispatch({
      type: CREATE_LAND_TYPE,
      payload
    });
    toastr.success("Added", "Custom land type added");
    dispatch(asyncActionFinish());
  };
};

//#region load land

const fetchLands = payload => {
  return { type: FETCH_ALL_LANDS, payload };
};

// fetch land from api
export const loadLandsAction = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const response = await axios.get("/land");
      const { status, data } = response.data;
      if (status === HTTP_OK) {
        dispatch(fetchLands(data));
      }
      dispatch(asyncActionFinish());
      toastr.success("Success!", "Loaded land successful");
    } catch (error) {
      dispatch(asyncActionError());
      dispatch(setErrorAction(error));
    }
  };
};
//#endregion
