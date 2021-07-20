import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import { useState } from "react";
import { BsPencilSquare, BsEye } from "react-icons/bs";
import EditAssistantForm from "./EditAssistantForm";

function EditAssistant(props) {
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    // console.log(e);
    setShow(true);
    setUserId(e);
  };

  return (
    <>
      <Button
        variant="outline-success"
        onClick={(e) => {
          handleShow(props.id);
        }}
        // style={{ backgroundColor: "#1B7000" }}
      >
        <BsEye /> View
      </Button>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton style={{ backgroundColor: "#FFF5E3" }}>
          <ModalTitle>Edit Assistant Profile</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <EditAssistantForm userId={userId} handleClose={handleClose} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default EditAssistant;
