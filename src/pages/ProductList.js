import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Pagination,
  Switch
} from "@material-ui/core";
import ProductListToolbar from "src/components/product/ProductListToolbar";
import EditProduct from "src/components/product/EditProductModal";
import moment from "moment";
import axios from "axios";

const ProductList = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1200/product").then((res) => {
      console.log(res.data, "walaaaaa");
      setData(res.data);
      setLoading(false)
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Products | Ntuma Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />

          <TablePagination
            component="div"
            count={data.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
      />
          <Box sx={{ 
            minWidth: 1050,
            backgroundColor: "white",
            padding: 3,
            borderRadius: "5px"
            
            }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Date of Entry</TableCell>
                  <TableCell>Edit Product</TableCell>
                  <TableCell>Unstock Product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, limit).map((product) => (
                  <TableRow hover key={product.id}>
                    <TableCell>
                      <img src={product.image} alt={product.productName} width='200px' height="100px" />
                    </TableCell>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.productType}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      {moment(product.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell>
                      <EditProduct/>
                    </TableCell>
                    <TableCell>
                      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default ProductList;
