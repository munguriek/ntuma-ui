import {useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  // Grid,
  Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
// import ProductCard from 'src/components/product//ProductCard';
// import products from 'src/__mocks__/products';

const ProductList = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1200/product').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return(
  <>
    <Helmet>
      <title>Products | Ntuma Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />

        {/* Replace the box below with product list instead */}
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
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
)
};
export default ProductList;
