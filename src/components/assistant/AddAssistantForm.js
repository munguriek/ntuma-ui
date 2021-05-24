import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const AddAssistantForm = () => (
<Form>
  <Form.Group as={Row} controlId="formFirstName">
    <Form.Label column sm={3}>
      First Name:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formSurname">
    <Form.Label column sm={3}>
      Surname:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formGender">
    <Form.Label column sm={3}>
      Select Gender:
    </Form.Label>
        {['radio'].map((type) => (
            <Col key={`inline-${type}`} sm={8}>
                <Form.Check inline label="Male" name="gender" type={type} id={`inline-${type}-Male`} />
                <Form.Check inline label="Female" name="gender" type={type} id={`inline-${type}-Female`} />
            </Col>
        ))}
  </Form.Group>

  <Form.Group as={Row} controlId="formPhone">
    <Form.Label column sm={3}>
      Phone Number:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formAddress">
    <Form.Label column sm={3}>
      Home Address:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formMarket">
    <Form.Label column sm={3}>
      Select Market:
    </Form.Label>
    <Col sm={8}>
      <Form.Control as="select">
          <option>Gabba</option>
          <option>Nakasero</option>
          <option>Kikubo</option>
          <option>Owino</option>
        </Form.Control>
    </Col>
  </Form.Group>

<Form.Group as={Row} controlId="formReferalNum">
    <Form.Label column sm={3}>
      Referal Number:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="text" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formProfilePhoto">
    <Form.Label column sm={3}>
      Profile Photo:
    </Form.Label>
    <Col sm={8}>
        <Form.File 
        id="custom-file"
        label="Upload your profile photo"
        custom
        />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPassword">
    <Form.Label column sm={3}>
      Create Password:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="password" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formPassword">
    <Form.Label column sm={3}>
      Confirm Password:
    </Form.Label>
    <Col sm={8}>
      <Form.Control type="password" />
    </Col>
  </Form.Group>

    <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 3 }}>
        <Button type="submit" style={{backgroundColor:"#E78C06"}} > Register </Button>
        </Col>
    </Form.Group>
    </Form>
);

export default AddAssistantForm;