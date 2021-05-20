import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import {useState} from 'react';
import AddProductForm from './NewProductForm';

function AddProduct(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow} style={{backgroundColor:"#1B7000"}}>
          ADD PRODUCT
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
          <ModalHeader closeButton
          style={{backgroundColor:"#FFF5E3"}}
          >
            <ModalTitle>Add New Product</ModalTitle>
          </ModalHeader>
          <ModalBody>
              <AddProductForm/>
          </ModalBody>
        </Modal>
      </>
    );
  }
  
  export default AddProduct;