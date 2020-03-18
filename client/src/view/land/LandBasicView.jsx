import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LandBasicForm from "../../components/Main/Land/LandBasicForm";
import { modalOpenAction } from "../../components/modal/reducer/modalAction";
import {
  createLandAction,
  loadLandOptionsAction
} from "../../components/Main/Land/reducer/landAction";
import ProgressBarView from "../../components/progress/ProgressBarView";

const LandBasicView = () => {
  const dispatch = useDispatch();
  const handleCreateBasicInfo = payload => {
    console.log("payload", payload);
    dispatch(createLandAction(payload));
  };
  const handleOpenModel = useCallback(
    (type, payload) => {
      dispatch(modalOpenAction(type, payload));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(loadLandOptionsAction());
  }, [dispatch]);

  const { loading } = useSelector(state => state.async);
  const { landType, landDescription, landStatus } = useSelector(
    state => state.land
  );

  return (
    <div>
      {loading ? (
        <ProgressBarView />
      ) : (
        <LandBasicForm
          onCreateBasic={handleCreateBasicInfo}
          openModal={handleOpenModel}
          landTypeOptions={landType}
          landDescriptionOptions={landDescription}
          landStatusOptions={landStatus}
        />
      )}
    </div>
  );
};

export default React.memo(LandBasicView);
