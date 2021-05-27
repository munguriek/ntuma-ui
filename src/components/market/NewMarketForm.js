import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, {useState, useEffect} from "react";

const AddMarketForm =() => {
  const [market, setMarket] = useState({
    market_name: "",
    market_location: "",
  });

  const addMarket = () => {
  axios.post("http://localhost:1200/add-market", { ...market })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    
  }, []);

    return (
      <Form onSubmit={(handleSubmit, addMarket)}>
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
              // onClick={handleSubmit}
              style={{ backgroundColor: "#E78C06" }}
            >
              {" "}
              Save Market{" "}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    );
  };

export default AddMarketForm;

// const [data, setData] = useState([]);

// const handleChange = () => {

// }

// const handleSubmit = () => {
//   const data = {
//     marketname: market_name,
//     marketlocation: market_location,
//   };
// };
// axios
//   .post("http://localhost:1200/add-market", data)
//   .then((res) => {
//     setData(res.data);
//     setMarket("");
//     setLocation("");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
