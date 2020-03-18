import createReducer from "../../../../app/reducer/reducerUtil";
import {
  CREATE_LAND,
  CREATE_LAND_TYPE,
  CREATE_LAND_DESCRIPTION,
  FETCH_ALL_LANDS,
  CREATE_LAND_USE,
  FETCH_LAND_TYPE,
  FETCH_LAND_DESCRIPTION,
  FETCH_LAND_STATUS
} from "./landConstants";

const initialState = {
  lands: [],
  landType: [],
  landStatus: [
    { _id: 0, status: "Not Allocated" },
    { _id: 1, status: "Allocated" }
  ],
  landDescription: [],
  landUse: []
};

const createLand = (state, payload) => {
  return { ...state };
};

const createLandType = (state, payload) => {
  return {
    ...state,
    landType: [...state.landType, Object.assign({}, payload)]
  };
};

const createLandDescription = (state, payload) => {
  return {
    ...state,
    landDescription: [...state.landDescription, Object.assign({}, payload)]
  };
};

const createLandUse = (state, payload) => {
  return { ...state, landUse: payload };
};

// load land state
const fetchLand = (state, payload) => {
  return { ...state, lands: payload };
};

const fetchLandType = (state, payload) => {
  return { ...state, landType: payload };
};

const fetchLandDescription = (state, payload) => {
  return { ...state, landDescription: payload };
};

const fetchLandStatus = (state, payload) => {
  return { ...state, landStatus: [...state.landStatus] };
};

export default createReducer(initialState, {
  [CREATE_LAND]: createLand,
  [FETCH_ALL_LANDS]: fetchLand,
  [CREATE_LAND_TYPE]: createLandType,
  [CREATE_LAND_DESCRIPTION]: createLandDescription,
  [CREATE_LAND_USE]: createLandUse,
  [FETCH_LAND_TYPE]: fetchLandType,
  [FETCH_LAND_DESCRIPTION]: fetchLandDescription,
  [FETCH_LAND_STATUS]: fetchLandStatus
});
