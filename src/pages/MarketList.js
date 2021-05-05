import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import MarketListToolbar from 'src/components/market//MarketListToolbar';
import MarketCard from 'src/components/market//MarketCard';
import markets from 'src/__mocks__/markets';

const MarketList = () => (
  <>
    <Helmet>
      <title>Markets | Ntuma Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <MarketListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {markets.map((market) => (
              <Grid
                item
                key={market.id}
                lg={4}
                md={6}
                xs={12}
              >
                <MarketCard market={market} />
              </Grid>
            ))}
          </Grid>
        </Box>
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
);

export default MarketList;
