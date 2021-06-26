import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import AddMarket from "./MarketModalForm";

const MarketListToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <AddMarket />
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
              placeholder="Search Market"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default MarketListToolbar;
