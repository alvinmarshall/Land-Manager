import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "../../components/Login/reducer/authReducer";
import errorReducer from "../../components/error/errorReducer";
import landReducer from "../../components/Main/Land/reducer/landReducer";
import modalReducer from "../../components/modal/reducer/modalReducer";
import asyncReducer from "../../components/async/asyncReducer";
import statsReducer from "../../components/Main/Stats/reducer/statsReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  land: landReducer,
  modal: modalReducer,
  async: asyncReducer,
  toastr: toastrReducer,
  stats: statsReducer
});
