import { useState , useEffect} from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import axios from 'axios';
import { User } from 'react-feather';

const AccountProfileDetails = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: ''
  });

  useEffect(() => {
    axios.get('http://localhost:1200/register').then((res) => {
      console.log(res.data)
      setData(res.data);
    });
  }, []);



  // const handleChange = (event) => {
  //   setValues({
  //     ...user,
  //     [event.target.name]: event.target.value
  //   });
  // };

  return (
    <form
      autoComplete="off"
      noValidate
      // {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Admin Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                // onChange={handleChange}
                required
                value={data.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                // onChange={handleChange}
                required
                value={data.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                // onChange={handleChange}
                required
                value={data.username}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                // onChange={handleChange}
                type="number"
                value={data.phone}
                variant="outlined"
              />
            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
