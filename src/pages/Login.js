import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';

const Login = () => {
  const navigate = useNavigate();
  const picture = {
    imageUrl: '/static/images/loginPagePic.jpg',
    name: 'Shop with Ntuma'
  };

  return (
    <>

      <Helmet>
        <title>Login | Ntuma</title>
      </Helmet>
      <Grid container spacing={0}>

        <Grid item xs={6}>
          <img
            src={picture.imageUrl}
            alt={picture.name}
            style={{
              height: 725,
              width: 720
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center'
            }}
          >
            <Container maxWidth="sm">
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                  password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={() => {
                  navigate('/app/dashboard', { replace: true });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Welcome to Ntuma
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Please login to access the Ntuma Admin Dashboard
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        pb: 0,
                        pt: 1
                      }}
                    />
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Sign in now
                      </Button>
                    </Box>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Don&apos;t have an account?
                      {' '}
                      <Link
                        component={RouterLink}
                        to="/register"
                        variant="h6"
                      >
                        Sign up
                      </Link>
                    </Typography>
                  </form>
                )}
              </Formik>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
