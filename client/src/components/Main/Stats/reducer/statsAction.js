import { FETCH_TOTAL_LAND } from "./statsConstants";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "../../../async/asyncAction";
import axios from "axios";
import { setErrorAction } from "../../../error/errorAction";
const fetchTotalLand = payload =>  {
  return { type: FETCH_TOTAL_LAND, payload };
};

const getFetchTotalLand = () => {
  return axios.get("/land?count=true");
};

export const getFetchTotalLandAction = () => {
  return async dispatch => {
    try {
      const landResponse = await getFetchTotalLand();
      const { data } = landResponse.data;
      dispatch(fetchTotalLand(data));
    } catch (err) {
      console.error(err);
      dispatch(setErrorAction(err));
    }
  };
};

export const fetchStatsAction = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      const landResponse = await getFetchTotalLand();
      const { data } = landResponse.data;
      dispatch(fetchTotalLand(data));
      dispatch(asyncActionFinish());
    } catch (err) {
      console.error(err);
      dispatch(asyncActionError());
      dispatch(setErrorAction(err));
    }
  };
};
