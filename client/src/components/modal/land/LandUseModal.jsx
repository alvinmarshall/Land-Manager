import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import SingleInputForm from "../../forms/SingleInputForm";
import useModalToggle from "../../../hooks/useModalToggle";

const LandUseModal = () => {
  const [modal, toggle] = useModalToggle();
  const handleFormSubmit = payload => {
    console.log("payload", payload);
  };
  return (
    <Modal
      className="modal-dialog"
      isOpen={modal}
      toggle={toggle}
      keyboard={false}
      backdrop={"static"}
    >
      <ModalHeader toggle={toggle}>Land Use</ModalHeader>
      <ModalBody>
        <SingleInputForm
          label="Use name"
          name="land_use"
          required={{ required: "use name is required" }}
          onFormSubmit={handleFormSubmit}
          toggle={toggle}
        />
      </ModalBody>
    </Modal>
  );
};

export default React.memo(LandUseModal);
