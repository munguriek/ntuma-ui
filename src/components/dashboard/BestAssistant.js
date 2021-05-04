import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';
import Icon from '@mdi/react';
import { mdiTrophy } from '@mdi/js';

const BestAssisstant = (props) => (
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
              height: 56,
              width: 56
            }}
          >
            <Icon
              path={mdiTrophy}
              size={1.5}
              color="white"
            >
              <mdiTrophy />
            </Icon>
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            BEST ASSISTANT
          </Typography>
          <Typography
            color="textPrimary"
            variant="h5"
          >
            John Doe
          </Typography>
          <Box component="fieldset" mb={1} borderColor="transparent">
            <Typography component="legend">Nakasero Market</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default BestAssisstant;
