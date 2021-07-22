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
  Switch,
} from "@material-ui/core";
import ProductListToolbar from "src/components/product/ProductListToolbar";
import EditProduct from "src/components/product/EditProductModal";
import moment from "moment";
import axios from "axios";
import "../App.css";

const ProductList = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1200/product")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);

  // calculations for the empty rows
  const emptyRows = limit - Math.min(limit, data.length - page * limit);

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
            // count is the cout of all your rows
            count={data.length}
            // onpagechnge is what we want to happen when we change the page
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            // page is the current page we are on
            page={page}
            // how many rows we want per page
            rowsPerPage={limit}
            // allows u pass on an array of rows one can choose to view in a page
            rowsPerPageOptions={[5, 10, 25]}
          />
          <Box
            sx={{
              minWidth: 1050,
              backgroundColor: "white",
              padding: 3,
              borderRadius: "5px",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Image</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Type</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Market</TableCell>
                  <TableCell>Date of Entry</TableCell>
                  <TableCell>Edit Product</TableCell>
                  <TableCell>Unstock Product</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/*  */}
                {data
                  .slice(page * limit, page * limit + limit)
                  .map((product) => (
                    <TableRow hover key={product.id}>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.productName}
                          class="cover"
                          width="200px"
                          height="100px"
                        />
                      </TableCell>
                      <TableCell>{product.productName}</TableCell>
                      <TableCell>{product.productType}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>{product.pdtMarket}</TableCell>
                      <TableCell>
                        {moment(product.createdAt).format("DD/MM/YYYY")}
                      </TableCell>
                      <TableCell>
                        <EditProduct />
                      </TableCell>
                      <TableCell>
                        <Switch
                          inputProps={{ "aria-label": "primary checkbox" }}
                          // onClick={deleteProduct()}
                        />
                      </TableCell>
                    </TableRow>
                  ))}

                {/* this is basically to create empty rows in the last page incase the number of rows are less than the limit and is good for ui */}
                {emptyRows > 0 && (
                  // so the emtpy rows take up the no. of rows emy times the pexels of the height = 53px
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
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
