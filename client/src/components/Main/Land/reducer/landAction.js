import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  CREATE_LAND_TYPE,
  FETCH_ALL_LANDS,
  CREATE_LAND_DESCRIPTION,
  FETCH_LAND_TYPE,
  FETCH_LAND_DESCRIPTION
} from "./landConstants";
import {
  asyncActionStart,
  asyncActionError,
  asyncActionFinish
} from "../../../async/asyncAction";
import { setErrorAction } from "../../../error/errorAction";
import { getFetchTotalLandAction } from "../../Stats/reducer/statsAction";

const HTTP_OK = 200;
const HTTP_CREATED = 201;

//#region Create & Update land
// Create new  / update land
export const createLandAction = payload => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      if (payload._id) {
        updateLand(payload, dispatch);
        return;
      }
      delete payload._id; // remove _id from payload
      const response = await axios.post("/land", payload);
      const { status } = response.data;
      if (status === HTTP_CREATED) {
        toastr.success("Created!", "Land created successful");
        dispatch(getFetchTotalLandAction());
      }
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError());
      dispatch(setErrorAction(err));
    }
  };
};
const updateLand = async (payload, dispatch) => {
  try {
    const response = await axios.put("/land", payload);
    const { status } = response.data;
    if (status === HTTP_OK) {
      toastr.success("Updated", "Land updated successful");
    }
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError());
    dispatch(setErrorAction(err));
  }
};
//#endregion

//#region Create land type options

// Add a custom land type to available land types
export const createLandTypeAction = payload => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const response = await axios.post("/land/create/type", payload);
      const { status, data } = response.data;
      if (status === HTTP_CREATED) {
        dispatch({
          type: CREATE_LAND_TYPE,
          payload: data
        });
        toastr.success("Created", "Land type added");
      }
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError());
      console.error(err);
    }
  };
};
//#endregion

//#region Create description options

export const createLandDescriptionAction = payload => {
  return async dispatch => {
    try {
      const response = await axios.post("/land/create/description", payload);
      const { status, data } = response.data;
      if (status === HTTP_CREATED) {
        dispatch({
          type: CREATE_LAND_DESCRIPTION,
          payload: data
        });
        toastr.success("Created", "Land description added");
      }
      dispatch(asyncActionFinish());
    } catch (err) {
      dispatch(asyncActionError());
      console.error(err);
    }
  };
};
//#endregion

//#region Create Land use options
export const createLandUseAction = payload => {
  return async dispatch => {
    try {
      // const response = await axios.post("/land/create/use", payload);
    } catch (err) {}
  };
};
//#endregion

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

export const loadLandOptionsAction = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const [typeRes, descripRes] = await Promise.all([
        axios.get("/land/types"),
        axios.get("/land/descriptions")
      ]);
      dispatch({
        type: FETCH_LAND_TYPE,
        payload: typeRes.data.data
      });

      dispatch({
        type: FETCH_LAND_DESCRIPTION,
        payload: descripRes.data.data
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.error(error);
    }
  };
};
//#endregion
