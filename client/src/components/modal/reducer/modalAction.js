import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

export const modalOpenAction = (modalType, modalProps) => {
  return {
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const modalCloseAction = () => {
  return { type: MODAL_CLOSE };
};
