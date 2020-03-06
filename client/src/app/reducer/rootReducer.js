import { combineReducers } from "redux";
import authReducer from "../../components/Login/reducer/authReducer";
import errorReducer from "../../components/error/errorReducer";
import landReducer from "../../components/Main/Land/reducer/landReducer";
import modalReducer from "../../components/modal/reducer/modalReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  land: landReducer,
  modal: modalReducer
});
