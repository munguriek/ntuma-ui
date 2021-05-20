import {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import axios from 'axios';

const Account = () => {
  // putting an empty array to give it an initial value
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:1200/register')
    .then((res) => {
      console.log(res)
      setUser(res.data)
    })
  }, [])
return (
  <>
    <Helmet>
      <title>Account | Ntuma Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            {/* <AccountProfile /> */}
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)
    };

export default Account;
