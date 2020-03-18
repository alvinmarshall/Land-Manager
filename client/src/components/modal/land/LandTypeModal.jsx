import React from "react";
import { useDispatch } from "react-redux"
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import useModalToggle from "../../../hooks/useModalToggle";
import SingleInputForm from "../../forms/SingleInputForm";
import { createLandTypeAction } from "../../Main/Land/reducer/landAction";

const LandTypeModal = () => {
  const dispatch = useDispatch()
  const [modal, toggle] = useModalToggle();
  const handleFormSubmit = payload => {
    console.log("payload", payload);
    dispatch(createLandTypeAction(payload))
  };


  return (
    <Modal
      className="modal-dialog"
      isOpen={modal}
      toggle={toggle}
      keyboard={false}
      backdrop={"static"}
    >
      <ModalHeader toggle={toggle}>Land Type</ModalHeader>
      <ModalBody>
        <SingleInputForm
          label="Type Name"
          name="type"
          required={{ required: "type is required" }}
          toggle={toggle}
          onFormSubmit={handleFormSubmit}
        />
      </ModalBody>
    </Modal>
  );
};

export default React.memo(LandTypeModal);
