import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormCheck } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

const AddProductForm = (props) => {
  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    price: "",
    quantity: "",
    pdtMarket: "",
    image: "",
  });

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(product)) {
      formData.append(key, value);
    }

    console.log({ formData });
    console.log({ product });
    axios
      .post("http://localhost:1200/product", formData)
      .then((res) => {
        console.log(res.data);
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={addProduct}>
      <Form.Group as={Row} controlId="formHorizontalName">
        <Form.Label column sm={2}>
          Name:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={product.productName}
            onChange={(e) => {
              setProduct({ ...product, productName: e.target.value });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalType">
        <Form.Label column sm={2}>
          Type:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={product.productType}
            onChange={(e) => {
              setProduct({ ...product, productType: e.target.value });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalPrice">
        <Form.Label column sm={2}>
          Price:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="text"
            value={product.price}
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalQty">
        <Form.Label column sm={2}>
          Quantity:
        </Form.Label>
        <Col sm={8}>
          <Form.Control
            type="number"
            value={product.quantity}
            onChange={(e) => {
              setProduct({ ...product, quantity: e.target.value });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalType">
        <Form.Label column sm={2}>
          Market:
        </Form.Label>
        <Col sm={8}>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Nakasero"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value={product.pdtMarket}
                onChange={(e) => {
                  setProduct({ ...product, pdtMarket: e.target.value });
                }}
              />
              <Form.Check
                inline
                label="Ggaba"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                value={product.pdtMarket}
                onChange={(e) => {
                  setProduct({ ...product, pdtMarket: e.target.value });
                }}
              />
              <Form.Check
                inline
                label="Owino"
                type={type}
                id={`inline-${type}-3`}
                value={product.pdtMarket}
                onChange={(e) => {
                  setProduct({ ...product, pdtMarket: e.target.value });
                }}
              />
              <Form.Check
                inline
                label="Kikuubo"
                type={type}
                id={`inline-${type}-3`}
                value={product.pdtMarket}
                onChange={(e) => {
                  setProduct({ ...product, pdtMarket: e.target.value });
                }}
              />
            </div>
          ))}
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
            onChange={(e) => {
              setProduct({ ...product, image: e.target.files[0] });
            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 8, offset: 2 }}>
          <Button
            type="submit"
            style={{ backgroundColor: "#E78C06" }}
            onClick={addProduct}
          >
            {" "}
            Add Product{" "}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default AddProductForm;
