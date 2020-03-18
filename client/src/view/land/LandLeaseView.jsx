import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import LeaseForm from "../../components/Main/Land/LeaseForm";
import { modalOpenAction } from "../../components/modal/reducer/modalAction";

const LandLeaseView = () => {
  const handleCreateLease = payload => {
    console.log("payload", payload);
  };
  const dispatch = useDispatch();
  const handleOpenModal = useCallback(
    (type, payload) => {
      dispatch(modalOpenAction(type, payload));
    },
    [dispatch]
  );
  const landUseOptions = []

  return (
    <div>
      <LeaseForm onCreaseLease={handleCreateLease} openModal={handleOpenModal} landUseOptions={landUseOptions} />
    </div>
  );
};

export default React.memo(LandLeaseView);
