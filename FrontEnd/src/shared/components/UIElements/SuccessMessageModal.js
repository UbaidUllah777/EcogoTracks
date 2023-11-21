import React from "react";

import Modal from "./Modal";
import Button from "../FormElements/Button";

const SuccessMessageModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="SUCCESS"
      show={!!props.message}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.message}</p>
    </Modal>
  );
};

export default SuccessMessageModal;
