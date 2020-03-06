import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch } from "react-redux";
import LandTypeForm from "../../Main/Land/LandTypeForm";
import { modalCloseAction } from "../reducer/modalAction";

const LandTypeModal = () => {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const toggle = () => setModal(dispatch(modalCloseAction));
  return (
    <div>
      <Modal
        className="modal-dialog modal-xl"
        isOpen={modal}
        toggle={toggle}
        keyboard={false}
        backdrop={"static"}
      >
        <ModalHeader toggle={toggle}>Product Detail</ModalHeader>
        <ModalBody>
          <LandTypeForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LandTypeModal;
