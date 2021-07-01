import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState, useEffect } from "react";

const AddMarketForm = (props) => {
  const [count, setCount] = useState(0);

  const AddedMrkts = () => {
    setCount(count + 1);
  };
  const [market, setMarket] = useState({
    market_image: "",
    market_name: "",
    market_location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(market)) {
      formData.append(key, value);
    }

    console.log({ formData });
    console.log({ market });
    axios
      .post("http://localhost:1200/add-market", formData, { ...market })
      .then((res) => {
        console.log(res.data);
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={market.market_name}
            onChange={(e) => {
              setMarket({ ...market, market_name: e.target.value });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Image:
        </Form.Label>
        <Col sm={8}>
          <Form.File
            id="custom-file"
            label="Upload a picture of the market"
            custom
            onChange={(e) => {
              setMarket({ ...market, market_image: e.target.files[0] });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalLocation">
        <Form.Label column sm={2}>
          Location:
        </Form.Label>
        <Col sm={8}>
          {/* value property is set equal to its corresponding state object */}
          {/* the onchange event is to update state on each user input */}
          <Form.Control
            type="text"
            value={market.market_location}
            onChange={(e) => {
              setMarket({ ...market, market_location: e.target.value });
              // each request
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 2 }}>
          <Button
            type="submit"
            onClick={AddedMrkts}
            style={{ backgroundColor: "#E78C06" }}
          >
            {" "}
            Save Market{" "}
          </Button>
          {/* <p>{count}</p> */}
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AddMarketForm;
