import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLandAction } from "../../components/Main/Land/reducer/landAction";
import CreateLandForm from "../../components/Main/Land/CreateLandForm";

const CreateLandView = () => {
  const dispatch = useDispatch();
  const { landType, landStatus, landDescription } = useSelector(
    state => state.land
  );
  const createlandDispatch = payload => {
    dispatch(createLandAction(payload));
  };
  const handleLandCreate = useCallback(createlandDispatch, [dispatch]);


  return (
    <div>
      <CreateLandForm
        onCreateLand={handleLandCreate}
        landTypeOptions={landType}
        landStatusOptions={landStatus}
        landDescriptionOptions={landDescription}
      />
    </div>
  );
};

export default React.memo(CreateLandView);
