import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import EditProductForm from "./EditProductForm";

function EditProduct(props) {
  const [show, setShow] = useState(false);
  const [prodId, setProdId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setProdId(e);
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
        <BsPencilSquare /> Edit
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
          <ModalTitle>Edit Product</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <EditProductForm prodId={prodId} handleClose={handleClose} />
        </ModalBody>
      </Modal>
    </>
  );
}

export default EditProduct;
