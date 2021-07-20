import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { Select, InputLabel, MenuItem, TextField } from "@material-ui/core";
import { BsCheckCircle, BsDownload } from "react-icons/bs";

const EditAssistantForm = (props) => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");

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
    dob: "",
    nin: "",
    natid: "",
  });
  console.log(assistant.firstName);
  useEffect(() => {
    setUserId(props.userId);

    axios.get("http://localhost:1200/assistants").then((res) => {
      //   console.log(res.data);
      for (let i = 0; i <= res.data.length; i++) {
        if (res.data[i]?._id == props.userId) {
          //   console.log(props.userId);
          console.log();
          setData(res.data[i]);
          setAssistant({
            firstName: res.data[i].firstName,
            surName: res.data[i].surName,
            gender: res.data[i].gender,
            phone: res.data[i].phone,
            address: res.data[i].address,
            market: res.data[i].market,
            refNumber: res.data[i].refNumber,
            profile_pic: res.data[i].profile_pic,
            password: res.data[i].password,
            dob: res.data[i].dob,
            nin: res.data[i].nin,
            natid: res.data[i].natid,
          });
        }
      }
    });
  }, []);

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
        // setAssistant(props.handleClose());
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
          Gender:
        </Form.Label>
        <Col sm={8}>
          <InputLabel id="label"></InputLabel>

          <Select labelId="label" id="select" value="">
            <MenuItem
              value={assistant.gender}
              onChange={(e) => {
                setAssistant({ ...assistant, gender: e.target.value });
              }}
            >
              Male
            </MenuItem>
            <MenuItem
              value={assistant.gender}
              onChange={(e) => {
                setAssistant({ ...assistant, gender: e.target.value });
              }}
            >
              Female
            </MenuItem>
          </Select>
        </Col>
      </Form.Group>{" "}
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
          Market:
        </Form.Label>
        <Col sm={8}>
          <InputLabel id="label"></InputLabel>

          <Select labelId="label" id="select" value="">
            <MenuItem
              value={assistant.market}
              onChange={(e) => {
                setAssistant({ ...assistant, market: e.target.value });
              }}
            >
              Gabba
            </MenuItem>
            <MenuItem
              value={assistant.market}
              onChange={(e) => {
                setAssistant({ ...assistant, market: e.target.value });
              }}
            >
              Nakasero
            </MenuItem>
            <MenuItem
              value={assistant.market}
              onChange={(e) => {
                setAssistant({ ...assistant, market: e.target.value });
              }}
            >
              Kikubo
            </MenuItem>
            <MenuItem
              value={assistant.market}
              onChange={(e) => {
                setAssistant({ ...assistant, market: e.target.value });
              }}
            >
              Owino
            </MenuItem>
          </Select>
        </Col>
      </Form.Group>{" "}
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
          Password:
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
      <Form.Group as={Row} controlId="formDOB">
        <Form.Label column sm={3}>
          Date of Birth:
        </Form.Label>
        <Col sm={8}>
          <Form noValidate>
            <TextField
              id="date"
              label="Birthdate"
              type="date"
              value={assistant.dob}
              onChange={(e) => {
                setAssistant({
                  ...assistant,
                  dob: e.target.value,
                });
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Form>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formFirstName">
        <Form.Label column sm={3}>
          National ID Number:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={assistant.nin}
            onChange={(e) => {
              setAssistant({ ...assistant, nin: e.target.value });
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formNatid">
        <Form.Label column sm={3}>
          National ID Attachment:
        </Form.Label>
        <Col sm={8}>
          <Form.File
            id="custom-file"
            label="Upload your National ID here"
            custom
            onChange={(e) => {
              setAssistant({ ...assistant, natid: e.target.files[0] });
            }}
          />
          <BsDownload />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 4, offset: 3 }}>
          <Button type="submit" style={{ backgroundColor: "#E78C06" }}>
            {" "}
            <BsCheckCircle /> Verify{" "}
          </Button>
        </Col>
        <Col sm={{ span: 8, offset: 6 }}>
          <Button type="submit" style={{ backgroundColor: "#E78C06" }}>
            {" "}
            Update{" "}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
export default EditAssistantForm;
