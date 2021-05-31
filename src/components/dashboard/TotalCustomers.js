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
import { mdiHomeAccount } from '@mdi/js';

const TotalCustomers = (props) => (
  <Card {...props}>
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
              path={mdiHomeAccount}
              size={1.5}
              color="white"
            >
              <mdiHomeAccount />
            </Icon>
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL CUSTOMERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            100
          </Typography>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 1
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[600] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[600],
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box> */}
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: green[600]
          }}
          Link to= "/"
        >
          View Customers List
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default TotalCustomers;
