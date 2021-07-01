import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Box, Container, Grid } from "@material-ui/core";
// import AccountProfilePictureCard from 'src/components/account/AccountProfilePictureCard';
import AccountProfileDetailsCard from "src/components/account/AccountProfileDetailsCard";
import axios from "axios";

const Account = () => {
  return (
    <div>
      <Helmet>
        <title>Account | Ntuma Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              {/* <AccountProfilePictureCard /> */}
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <AccountProfileDetailsCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Account;
