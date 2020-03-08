import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLandAction } from "../../components/Main/Land/reducer/landAction";
import CreateLandForm from "../../components/Main/Land/CreateLandForm";
import { modalOpenAction } from "../../components/modal/reducer/modalAction";

const CreateLandView = () => {
  const dispatch = useDispatch();
  
  const { landType, landStatus, landDescription } = useSelector(
    state => state.land
  );

  //Create land Action
  const createLandDispatch = payload => {
    dispatch(createLandAction(payload));
  };

  //Memorize create land Action
  const handleLandCreate = useCallback(createLandDispatch, [dispatch]);

  //Open Modal with props
  const handleModalDispatch = (modal, props) => {
    dispatch(modalOpenAction(modal, props));
  };

  //Memorize Open modal
  const handleOpenModal = useCallback(handleModalDispatch, [dispatch]);

  return (
    <div>
      <CreateLandForm
        onCreateLand={handleLandCreate}
        landTypeOptions={landType || []}
        landStatusOptions={landStatus || []}
        landDescriptionOptions={landDescription || []}
        openModal={handleOpenModal}
      />
    </div>
  );
};

export default React.memo(CreateLandView);
