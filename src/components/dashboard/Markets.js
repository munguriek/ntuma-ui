import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import StoreIcon from "@material-ui/icons/Store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Markets = (props) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56,
              }}
            >
              <StoreIcon fontSize="large" style={{ color: "white" }} />
            </Avatar>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              AVAILABLE MARKETS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {count}
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: green[600],
            }}
            onClick={() => {
              navigate("/app/markets");
              // setCount(count + 1);
            }}
          >
            View Markets List
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Markets;
