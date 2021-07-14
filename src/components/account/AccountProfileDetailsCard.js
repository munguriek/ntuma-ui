import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import axios from "axios";
// import { User } from 'react-feather';

const AccountProfileDetails = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1200/register").then((res) => {
      console.log(res.data);
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
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader
          title="Admin Profile"
          subheader="This information can be edited"
        />
        <Divider />

        <CardContent>
          {data.map((user, index) => (
            <Grid container spacing={3} key={user.id}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  // helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  // onChange={handleChange}
                  required
                  value={user.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  // onChange={handleChange}
                  required
                  value={user.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  // onChange={handleChange}
                  required
                  value={user.username}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  // onChange={handleChange}
                  type="number"
                  value={user.phone}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          ))}
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button
            color="primary"
            variant="contained"
            // onClick={}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
