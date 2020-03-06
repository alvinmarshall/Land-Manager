import createReducer from "../../../app/reducer/reducerUtil";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

const initialState = null;

const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = (state, payload) => false;

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
