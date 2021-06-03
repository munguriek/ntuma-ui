import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import { orange, green } from '@material-ui/core/colors';
import Icon from '@mdi/react';
import { mdiAccountStar } from '@mdi/js';
import { useNavigate } from "react-router-dom";

const Assistants = (props) => {
  const navigate = useNavigate(); 

return (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              color: 'white',
              height: 56,
              width: 56
            }}
          >
            <Icon
              path={mdiAccountStar}
              size={1.3}
              color="white"
            >
              <mdiAccountStar />
            </Icon>
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            MARKET ASSISTANTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            50
          </Typography>
        </Grid>

      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography> */}
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: green[600]
          }}
          onClick ={() => {
              navigate("/app/assistants");
            }}
        >
          View Assistants List
        </Button>
      </Box>
    </CardContent>
  </Card>
);
};
export default Assistants;
