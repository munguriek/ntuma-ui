import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useState } from 'react';


const AddAssistantForm = (props) => {
const [assistant, setAssistant] = useState({
  firstName: "",
  surName: "",
  gender: "",
  phone: "",
  address: "",
  market: "",
  refNumber: "",
  profile_pic: "",
  password: "",
  confirm_password: "",
  email: "",
});

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData();

  for (const [key, value] of Object.entries(assistant)) {
    formData.append(key, value);
  }

  console.log({ formData });
  console.log({ assistant });
  axios
    .post("http://localhost:1200/assistants", formData, { ...assistant })
    .then((res) => {
      console.log(res.data);
      props.handleClose();
    })
    .catch((err) => {
      console.log(err);
    });
};

return (
  <Form onSubmit={handleSubmit}>
    <Form.Group as={Row} controlId="formFirstName">
      <Form.Label column sm={3}>
        First Name:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="text"
          value={assistant.firstName}
          onChange={(e) => {
            setAssistant({ ...assistant, firstName: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formSurname">
      <Form.Label column sm={3}>
        Surname:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="text"
          value={assistant.surName}
          onChange={(e) => {
            setAssistant({ ...assistant, surName: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formGender">
      <Form.Label column sm={3}>
        Select Gender:
      </Form.Label>
      {["radio"].map((type) => (
        <Col key={`inline-${type}`} sm={8}>
          <Form.Check
            inline
            label="Male"
            name="gender"
            type={type}
            id={`inline-${type}-Male`}
            value={assistant.gender}
            onChange={(e) => {
              setAssistant({ ...assistant, gender: e.target.value });
            }}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type={type}
            id={`inline-${type}-Female`}
            value={assistant.gender}
            onChange={(e) => {
              setAssistant({ ...assistant, gender: e.target.value });
            }}
          />
        </Col>
      ))}
    </Form.Group>

    <Form.Group as={Row} controlId="formPhone">
      <Form.Label column sm={3}>
        Phone Number:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="number"
          value={assistant.phone}
          onChange={(e) => {
            setAssistant({ ...assistant, phone: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formAddress">
      <Form.Label column sm={3}>
        Home Address:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="text"
          value={assistant.address}
          onChange={(e) => {
            setAssistant({ ...assistant, address: e.target.value });
          }}
        />
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
          value={assistant.market}
          onChange=
          {(e) => {
            setAssistant({ ...assistant, market: e.target.value });
          }}
        </Form.Control>
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formReferalNum">
      <Form.Label column sm={3}>
        Referal Number:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="text"
          value={assistant.refNumber}
          onChange={(e) => {
            setAssistant({ ...assistant, refNumber: e.target.value });
          }}
        />
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
          onChange={(e) => {
            setAssistant({ ...assistant, profile_pic: e.target.files[0] });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPassword">
      <Form.Label column sm={3}>
        Create Password:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="password"
          value={assistant.password}
          onChange={(e) => {
            setAssistant({ ...assistant, password: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formPassword">
      <Form.Label column sm={3}>
        Confirm Password:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="password"
          value={assistant.confirm_password}
          onChange={(e) => {
            setAssistant({ ...assistant, confirm_password: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row} controlId="formEmail">
      <Form.Label column sm={3}>
        Email:
      </Form.Label>
      <Col sm={8}>
        <Form.Control
          type="email"
          value={assistant.email}
          onChange={(e) => {
            setAssistant({ ...assistant, email: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Col sm={{ span: 8, offset: 3 }}>
        <Button type="submit" style={{ backgroundColor: "#E78C06" }}>
          {" "}
          Register{" "}
        </Button>
      </Col>
    </Form.Group>
  </Form>
);
};
export default AddAssistantForm;
