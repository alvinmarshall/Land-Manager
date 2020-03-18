import React from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import SingleInputForm from "../../forms/SingleInputForm";
import useModalToggle from "../../../hooks/useModalToggle";
import { createLandDescriptionAction } from "../../Main/Land/reducer/landAction";

const LandDescriptionModal = () => {
  const dispatch = useDispatch();
  const [modal, toggle] = useModalToggle();

  const handleFormSubmit = payload => {
    console.log("payload", payload);
    dispatch(createLandDescriptionAction(payload));
  };

  return (
    <Modal
      className="modal-dialog"
      isOpen={modal}
      toggle={toggle}
      keyboard={false}
      backdrop={"static"}
    >
      <ModalHeader toggle={toggle}>Land Description</ModalHeader>
      <ModalBody>
        <SingleInputForm
          type="text"
          label="Description Name"
          name="description"
          required={{ required: "description is required" }}
          toggle={toggle}
          onFormSubmit={handleFormSubmit}
        />
      </ModalBody>
    </Modal>
  );
};

export default React.memo(LandDescriptionModal);
