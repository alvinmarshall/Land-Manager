import React from "react";
import { useSelector } from "react-redux";
import LandTypeModal from "./land/LandTypeModal";
import LandDescriptionModal from "./land/LandDescriptionModal";
import LandUseModal from "./land/LandUseModal";

const modalLookUp = { LandTypeModal, LandDescriptionModal, LandUseModal };

const ModalManager = () => {
  const currentModal = useSelector(state => state.modal);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookUp[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default ModalManager;
