import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalCloseAction } from "../components/modal/reducer/modalAction";

export default () => {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const closeModal = useSelector(state => state.modal);
  const toggle = () => {
    dispatch(modalCloseAction());
    setModal(closeModal);
  };

  return [modal,toggle]
};
