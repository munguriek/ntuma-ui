import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
// import moment from "moment";

const EditProductForm = (props) => {
  const [prodId, setProdId] = useState("");
  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    price: "",
    quantity: "",
    image: "",
  });

  const [data, setData] = useState([]);

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

  useEffect(() => {
    setProdId(props.prodId);
    axios.get("http://localhost:1200/product").then((res) => {
      // console.log(res.data);

      for (let i = 0; i <= res.data.length; i++) {
        if (res.data[i]?._id == props.prodId) {
          //   console.log(props.userId);
          console.log();
          setData(res.data[i]);
          setProduct({
            productName: res.data[i].productName,
            productType: res.data[i].productType,
            price: res.data[i].price,
            quantity: res.data[i].quantity,
            image: res.data[i].image,
          });
        }
      }
    });
  }, []);

  return (
    <Form onSubmit={addProduct}>
      {/* {data.slice(0, limit).map((product) =>( */}
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
            Update Product{" "}
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default EditProductForm;
