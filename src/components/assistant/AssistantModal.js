import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import {useState} from 'react';
import AddAssistantForm from './AddAssistantForm';

function AddAssistant(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow} style={{backgroundColor:"#1B7000"}}>
          ADD ASSISTANT
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
            <ModalTitle>Register New Market Assistant</ModalTitle>
          </ModalHeader>
          <ModalBody>
              <AddAssistantForm/>
          </ModalBody>
        </Modal>
      </>
    );
  }
  
  export default AddAssistant;