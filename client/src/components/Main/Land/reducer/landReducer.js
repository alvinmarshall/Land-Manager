import createReducer from "../../../../app/reducer/reducerUtil";
import {
  CREATE_LAND,
  GET_ALL_LANDS,
  CREATE_LAND_TYPE,
  CREATE_LAND_DESCRIPTION
} from "./landConstants";

const initialState = {
  lands: [],
  isLoading: false,
  landType: [
    { value: "Government Reserved" },
    { value: "School" },
    { value: "Market" },
    { value: "Other" }
  ],
  landStatus: [{ value: "Not allocated" }, { value: "Allocated" }],
  landDescription: [
    { value: "Waterlogged" },
    { value: "Swappy" },
    { value: "Other" }
  ]
};

const createLand = (state, payload) => {
  return { ...state, lands: [...state.lands, Object.assign({}, payload)] };
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

const getAllLand = (state, payload) => {
  return { ...state, payload };
};

export default createReducer(initialState, {
  [CREATE_LAND]: createLand,
  [GET_ALL_LANDS]: getAllLand,
  [CREATE_LAND_TYPE]: createLandType,
  [CREATE_LAND_DESCRIPTION]: createLandDescription
});
