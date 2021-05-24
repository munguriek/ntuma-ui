// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  Grid,
} from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
// import axios from 'axios';

// function CreateRegister() {
//   const [input, setInput] = useState({
//     email: '',
//     phone: '',
//     firstName: '',
//     lastName: '',
//     password: ''
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setInput((prevInput) => ({
//       ...prevInput,
//       [name]: value
//     }));
//   }
// }

// function handleClick(event) {
//   event.preventDefault();
//   const newRegister = {
//     email: input.email,
//     phone: input.phone,
//     firstName: input.firstName,
//     lastName: input.lastName,
//     password: input.password
//   };
//   axios.post('http://localhost:4000/register', newRegister);
// }

// class Registerdb extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // eslint-disable-next-line react/no-unused-state
//       email: '',
//       // eslint-disable-next-line react/no-unused-state
//       phone: '',
//       // eslint-disable-next-line react/no-unused-state
//       firstName: '',
//       // eslint-disable-next-line react/no-unused-state
//       lastName: '',
//       // eslint-disable-next-line react/no-unused-state
//       password: ''
//     };
//     this.validateForm = this.validateForm.bind(this);
//     this.onChangeInput = this.onChangeInput.bind(this);
//   }

//   // function registerFormData(firstName, lastName, age, eyeColor) {
//   //   this.firstName = firstName;
//   //   this.lastName = lastName;
//   //   this.age = age;
//   //   this.eyeColor = eyeColor;
//   //   };
//   // }
//   // eslint-disable-next-line no-undef
//   // eslint-disable-next-line no-restricted-globals
//   onChangeInput(event) {
//   // console.log('=----event----', event);
//   // eslint-disable-next-line no-restricted-globals
//     const { name } = event.target;
//     // eslint-disable-next-line no-restricted-globals
//     const { value } = event.target;
//     this.setState({ [name]: value });
//   }

//   // eslint-disable-next-line class-methods-use-this
//   validateForm() {
//     // const email = this.state.email;
//     // const phone = this.state.phone;
//     // const firstName = this.state.firstName;
//     // const lastName = this.state.lastName;
//     // const password = this.state.password;

//     // constructing form data
//     // constructing form data
//     // constructing form data
//     const registerFormData = {
//       // eslint-disable-next-line no-undef
//       email,
//       // eslint-disable-next-line no-undef
//       phone,
//       // eslint-disable-next-line no-undef
//       firstName,
//       // eslint-disable-next-line no-undef
//       lastName,
//       // eslint-disable-next-line no-undef
//       password
//     };
//       // post data to server
//     axios.post('http://localhost:4000/register', registerFormData)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

const Register = () => {
  const navigate = useNavigate();

  const picture = {
    imageUrl: '/static/images/loginPagePic.jpg',
    name: 'Shop with Ntuma'
  };

  // const AddAdmin = () => {
  // const [email, setemail] = useState('');
  // const [phone, setphone] = useState('');
  // const [firstName, setfirstName] = useState('');
  // const [lastName, setlastName] = useState('');
  // const [password, setpassword] = useState('');

  // const createAdmin = (e) => {
  //   e.preventDefault();
  //   const admin = {
  //     email,
  //     phone,
  //     firstName,
  //     lastName,
  //     password
  //   };

  //   const options = {
  //     method: 'post',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(admin)
  //   };

  //   if (email && phone && firstName && lastName && password) {
  //     fetch('http://localhost:4000/register', options)
  //       .then((res) => {
  //         console.log(res);
  //         // eslint-disable-next-line no-undef
  //         setRedirect(true);
  //       });
  //   } else {
  //     console.log('Invalid form cannot be sent');
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>Register | Ntuma Admin</title>
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
              justifyContent: 'center',
            }}
          >
            <Container
              maxWidth="sm"
            >
              <Formik
                initialValues={{
                  email: '',
                  phone: '',
                  firstName: '',
                  lastName: '',
                  password: '',
                  policy: false
                }}
                validationSchema={
              Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                phone: Yup.string().max(255).required('Phone number is required'),
                firstName: Yup.string().max(255).required('First name is required'),
                lastName: Yup.string().max(255).required('Last name is required'),
                password: Yup.string().max(255).required('password is required'),
                policy: Yup.boolean().oneOf([true], 'This field must be checked')
              })
            }
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
                  // <form onSubmit={() => { handleSubmit(); createAdmin(); }}>
                  <form onSubmit={handleSubmit}>
                    {/* No need to use onSubmit because Form method covers everything */}
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        color="textPrimary"
                        variant="h2"
                      >
                        Create new admin account
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        Use your email to create new account
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      id="firstName"
                      name="firstName"
                      onBlur={handleBlur}
                      value={values.firstName}
                      onChange={handleChange}
                      // onInput={(e) => setfirstName(e.target.value)}
                      // onChange={(e) => setfirstName(e.target.value)}
                      // onChange=" {handleChange}; {(e) => setfirstName(e.target.value)} "
                      // value=" { values.firstName } ; {this.state.firstName }; "
                      // reducing on boilerplate code using formik.getFieldprops
                      // Secondly formik,getField props can be reduced by importing Field from Formik and replacing Input tags with Field
                      // Therefore Field will automatically handle the getting of props e.g onChange, onBlur etc
                      // {... Formik.getFieldProps('firstName')}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      id="lastName"
                      name="lastName"
                      onBlur={handleBlur}
                      // onChange={handleChange}
                      value={values.lastName}
                      onChange={handleChange}
                      // onInput={(e) => setlastName(e.target.value)}
                      // onChange=" {handleChange}; {(e) => this.onChangeInput(e)} "
                      // value=" {values.lastName} ; {this.state.lastName }; "
                      // reducing on boilerplate code using formik.getFieldprops
                      // {... Formik.getFieldProps('lastName')}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      id="email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      // onInput={(e) => setemail(e.target.value)}
                      // onChange={(e) => setemail(e.target.value)}
                    // reducing on boilerplate code using formik.getFieldprops
                    // {... Formik.getFieldProps('email')}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      helperText={touched.phone && errors.phone}
                      label="Phone Number"
                      margin="normal"
                      id="phone"
                      name="phone"
                      onBlur={handleBlur}
                      // onChange={handleChange}
                      onChange={handleChange}
                      value={values.phone}
                      // onChange={(e) => setphone(e.target.value)}
                      // onInput={(e) => setphone(e.target.value)}
                    // reducing on boilerplate code using formik.getFieldprops
                    // {... Formik.getFieldProps('phone')}
                      variant="outlined"
                    />
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      id="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      // onInput={(e) => setpassword(e.target.value)}
                      type="password"
                      value={values.password}
                      // onChange={(e) => setpassword(e.target.value)}
                    // reducing on boilerplate code using formik.getFieldprops
                    // {... Formik.getFieldProps('password')}
                      variant="outlined"
                    />
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                        ml: -1
                      }}
                    >
                      <Checkbox
                        checked={values.policy}
                        name="policy"
                        onChange={handleChange}
                      />
                      <Typography
                        color="textSecondary"
                        variant="body1"
                      >
                        I have read the
                        {' '}
                        <Link
                          color="primary"
                          component={RouterLink}
                          to="#"
                          underline="always"
                          variant="h6"
                        >
                          Terms and Conditions
                        </Link>
                      </Typography>
                    </Box>
                    {Boolean(touched.policy && errors.policy) && (
                      <FormHelperText error>
                        {errors.policy}
                      </FormHelperText>
                    )}
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Sign up now
                      </Button>
                    </Box>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Have an account?
                      {' '}
                      <Link
                        component={RouterLink}
                        to="/login"
                        variant="h6"
                      >
                        Sign in
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
// };

// export default new Registerdb();
// export default Register;
// export {  AddAdmin, Register};
// call the function exported for example getItems
export default Register;
