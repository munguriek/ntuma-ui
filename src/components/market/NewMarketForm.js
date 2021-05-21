import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AddMarketForm = () => (
<Form>
  <Form.Group as={Row} controlId="formHorizontalName">
    <Form.Label column sm={2}>
      Name:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalLocation">
    <Form.Label column sm={2}>
      Location:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

    <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 2 }}>
        <Button type="submit" style={{backgroundColor:"#E78C06"}} > Save Market </Button>
        </Col>
    </Form.Group>
    </Form>
);

export default AddMarketForm;