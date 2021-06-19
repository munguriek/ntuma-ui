import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import AddProduct from "./ProductModal";

const ProductListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* <h1>{market.market_name}</h1> */}
      <AddProduct />
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon fontSize="small" color="action">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                ),
              }}
              placeholder="Search product"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default ProductListToolbar;
