import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import LandTypeForm from "../../Main/Land/LandTypeForm";
import { modalCloseAction } from "../reducer/modalAction";

const LandTypeModal = () => {
  const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const close = useSelector(state => state.modal);
  const toggle = () => {
    dispatch(modalCloseAction());
    setModal(close);
  };
  return (
    <div>
      <Modal
        className="modal-dialog"
        isOpen={modal}
        toggle={toggle}
        keyboard={false}
        backdrop={"static"}
      >
        <ModalHeader toggle={toggle}>Land Type</ModalHeader>
        <ModalBody>
          <LandTypeForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default React.memo(LandTypeModal);
