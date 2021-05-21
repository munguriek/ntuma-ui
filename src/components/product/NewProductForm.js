import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AddProductForm = () => (
<Form>
  <Form.Group as={Row} controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalType">
    <Form.Label column sm={2}>
      Type:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPrice">
    <Form.Label column sm={2}>
      Price:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalQty">
    <Form.Label column sm={2}>
      Quantity:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPhoto">
    <Form.Label column sm={2}>
      Photo:
    </Form.Label>
    <Col sm={8}>
        <Form.File 
        id="custom-file"
        label="Upload photo of product"
        custom
        />
    </Col>
  </Form.Group>

    <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 2 }}>
        <Button type="submit" style={{backgroundColor:"#E78C06"}} > Add Product </Button>
        </Col>
    </Form.Group>
    </Form>
);

export default AddProductForm;