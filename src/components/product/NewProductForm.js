import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useState} from 'react';

const AddProductForm = () => {
const [product, setProduct] = useState({
  productName: "",
  productType: "",
  price: "",
  quantity: "",
  photo: ""
})

const addProduct = () => {
  axios.post("http://localhost:1200/product", { ...product })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleSubmit = (e) => {
  e.preventDefault();
};

return (
  <Form onSubmit={(handleSubmit, addProduct)}>
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

    <Form.Group as={Row} controlId="formHorizontalPhoto">
      <Form.Label column sm={2}>
        Photo:
      </Form.Label>
      <Col sm={8}>
        <Form.File
          id="custom-file"
          label="Upload photo of product"
          custom
          value={product.photo}
          onChange={(e) => {
            setProduct({ ...product, photo: e.target.value });
          }}
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Col sm={{ span: 8, offset: 2 }}>
        <Button type="submit" style={{ backgroundColor: "#E78C06" }}>
          {" "}
          Add Product{" "}
        </Button>
      </Col>
    </Form.Group>
  </Form>
);
};

export default AddProductForm;