import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

const MarketCard = ({ market, ...rest }) => (
  
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        <img
          src={market.market_image}
          alt={market.market_name}
          class = "cover"
          width="200px"
          height="100px"
        />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h4">
        {market.market_name}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        {market.market_location}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >

          <Button
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            View Products
          </Button>

        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Button
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Deactivate
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

MarketCard.propTypes = {
  markets: PropTypes.object.isRequired,
};

export default MarketCard;


