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
  Typography,
  Avatar,
  
  // Grid,
  Pagination,
} from "@material-ui/core";
import ProductListToolbar from "src/components/product/ProductListToolbar";
// import ProductCard from 'src/components/product//ProductCard';
// import products from 'src/__mocks__/products';
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

          {/* Replace the box below with product list instead */}
          <TablePagination
            component="div"
            count={data.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
      />
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Product image</TableCell>
                  <TableCell>Date of entry</TableCell>
                  <TableCell>Delete product</TableCell>
                  <TableCell>Edit product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(0, limit).map((product) => (
                  <TableRow hover key={product.id}>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Typography color="textPrimary" variant="body1">
                          {product.productName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{product.productType}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
               
                      <img src={product.image} alt={product.productName} width='200px' height="100px" />
                    </TableCell>
                    <TableCell>
                      {moment(product.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
          

          {/* <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {data.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box> */}

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
