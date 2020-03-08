import createReducer from "../../../../app/reducer/reducerUtil";
import {
  CREATE_LAND,
  CREATE_LAND_TYPE,
  CREATE_LAND_DESCRIPTION,
  FETCH_ALL_LANDS
} from "./landConstants";

const initialState = {
  lands: [],
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

// load land state
const fetchLand = (state, payload) => {
  return { ...state, lands: payload };
};

export default createReducer(initialState, {
  [CREATE_LAND]: createLand,
  [FETCH_ALL_LANDS]: fetchLand,
  [CREATE_LAND_TYPE]: createLandType,
  [CREATE_LAND_DESCRIPTION]: createLandDescription
});
