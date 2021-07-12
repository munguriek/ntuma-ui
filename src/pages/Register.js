/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

import { authenticate, isAuth } from '../helpers/auth';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   username: "",
  //   phone: "",
  //   password1: "",
  //   password2: "",
  //   policy: false,
  //   textChange: 'Sign Up'
  // });
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      password1: '',
      password2: '',
      policy: false,
      textChange: 'SIGN UP NOW'
  })

  // const addUser = () => {
  //   axios.post("http://localhost:1200/register", { ...user })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const manageSubmit = (e) => {
  //   e.preventDefault();
  // };
  const { username, email, phone, firstName, lastName, password1, password2, textChange} = formData
  // Handle change inputs
  const handleChange = text => e => {
      // console.log( username, email, phone, firstName, lastName, password1, password2 )
      setFormData({...formData, [text]: e.target.value})
  }

  // Submit data to backend
  const handleSubmit = e => {
      e.preventDefault()
      if (username && email && phone && firstName && lastName && password1){
        console.log( username, email, phone, firstName, lastName, password1, password2 )
        if (password1 === password2) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(
              `${process.env.REACT_APP_API_URL}/register`,
              {
                "username":username,
                "email":email,
                "phone":phone,
                "firstName":firstName,
                "lastName":lastName,
                "password": password1
              // username, email, phone, firstName, lastName, password: password1
          },
          { 
            headers: {
            "Content-Type":"application/json",
            "Accept": "*/*",
            } 
        }
  ).then(res => {
              setFormData({
                  ...formData,
                  username: '',
                  email: '',
                  phone: '',
                  firstName: '',
                  lastName: '',
                  password1: '',
                  password2: '',
                  textChange: 'SUBMITTED'
              })
              toast.success(res.data.message)
          }).catch(err => {
              setFormData({
                ...formData,
                username: '',
                email: '',
                phone: '',
                firstName: '',
                lastName: '',
                password1: '',
                password2: '',
                textChange: 'SIGN UP NOW'
            })
            // console.log(err.response);
            toast.error(err.response.data.errors)
          })
      } else {
        toast.error("Passwords don't matches");
      }
    } else {
          toast.error("Please Fill all fields")
      }
  }
  
  const navigate = useNavigate();

  const picture = {
    imageUrl: '/static/images/loginPagePic.jpg',
    name: 'Shop with Ntuma'
  };

  return (
    <>
      {isAuth() ? <navigate to='/' /> : null}
      <ToastContainer />
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
              width: 720,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="sm">
              {/* <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  username: "",
                  phone: "",
                  password: "",
                  policy: "",
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string()
                    .max(255)
                    .required("First name is required"),
                  lastName: Yup.string()
                    .max(255)
                    .required("Last name is required"),
                  username: Yup.string()
                    .email("Must be a valid email")
                    .max(255)
                    .required("Email is required"),
                  phone: Yup.string()
                    .max(255)
                    .required("Phone number is required"),
                  password: Yup.string()
                    .max(255)
                    .required("password is required"),
                  policy: Yup.boolean().oneOf(
                    [true],
                    "This field must be checked"
                  ),
                })}
                handleSubmit={() => {
                  navigate("/app/Login", { replace: true });
                }}
              > */}
                {/* {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => ( */}
                  {/* <form onSubmit={(handleSubmit, manageSubmit, addUser)}> */}
                  <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 3 }}>
                      <Typography color="textPrimary" variant="h2">
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
                      // error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      // helperText={touched.firstName && errors.firstName}
                      label="UserName"
                      margin="normal"
                      name="username"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, firstName: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('username')}
                      // value={user.firstName}
                      value={username}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.firstName && errors.firstName)}
                      fullWidth
                      // helperText={touched.firstName && errors.firstName}
                      label="First name"
                      margin="normal"
                      name="firstName"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, firstName: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('firstName')}
                      // value={user.firstName}
                      value={firstName}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.lastName && errors.lastName)}
                      fullWidth
                      // helperText={touched.lastName && errors.lastName}
                      label="Last name"
                      margin="normal"
                      name="lastName"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, lastName: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('lastName')}
                      // value={user.lastName}
                      value={lastName}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.email && errors.email)}
                      fullWidth
                      // helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      // name="username"
                      name="email"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, username: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('email')}
                      type="email"
                      // value={user.username}
                      value={email}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.phone && errors.phone)}
                      fullWidth
                      // helperText={touched.phone && errors.phone}
                      label="Phone Number"
                      margin="normal"
                      name="phone"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, phone: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('phone')}
                      // value={user.phone}
                      value={phone}
                      variant="outlined"
                    />
                    <TextField
                      // error={Boolean(touched.password && errors.password)}
                      fullWidth
                      // helperText={touched.password && errors.password}
                      label="Password"
                      margin="normal"
                      name="password"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, password: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('password1')}
                      type="password"
                      // value={user.password}
                      variant="outlined"
                      value={password1}
                    />
                    <TextField
                      // error={Boolean(touched.password && errors.password)}
                      fullWidth
                      // helperText={touched.password && errors.password}
                      label="Confirm Password"
                      margin="normal"
                      name="password2"
                      // onBlur={handleBlur}
                      // onChange={
                      //   (handleChange,
                      //   (e) => {
                      //     setUser({ ...user, password: e.target.value });
                      //   })
                      // }
                      onChange={handleChange('password2')}
                      type="password"
                      // value={user.password}
                      variant="outlined"
                      value={password2}
                    />
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        ml: -1,
                      }}
                    >
                      <Checkbox
                        // checked={user.policy}
                        name="policy"
                        // onChange={(
                        //   handleChange,
                        //   (e) => {
                        //     setUser({ ...user, policy: e.target.checked });
                        //   })
                        // }
                      />
                      <Typography color="textSecondary" variant="body1">
                        I have read the{" "}
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
                    {/* {Boolean(touched.policy && errors.policy) && (
                      <FormHelperText error>{errors.policy}</FormHelperText>
                    )} */}
                    <Box sx={{ py: 2 }}>
                      <Button
                        color="primary"
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        {/* Sign up now */}
                        <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                        <span className='ml-3'>{textChange}</span>
                      </Button>
                      {/* <button
                        type='submit'
                        className='mt-5 tracking-wide font-semibold bg-indigo-400 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                      >
                        <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                        <span className='ml-3'>{textChange}</span>
                        Register
                      </button> */}
                    </Box>
                    <Typography color="textSecondary" variant="body1">
                      Have an account?{" "}
                      <Link component={RouterLink} to="/login" variant="h6">
                        Sign in
                      </Link>
                    </Typography>
                  </form>
                {/* )} */}
              {/* </Formik> */}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;


// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import authSvg from '../assets/auth.svg'
// import { ToastContainer, toast } from 'react-toastify';
// import { authenticate, isAuth } from '../helpers/auth';
// import axios from 'axios';
// // import { Redirect } from 'react-router-dom';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         phone: '',
//         firstName: '',
//         lastName: '',
//         password1: '',
//         password2: '',
//         textChange: 'Sign Up'
//     })

//     const { username, email, phone, firstName, lastName, password1, password2, textChange} = formData
//     // Handle change inputs
//     const handleChange = text => e => {
//         // console.log( username, email, phone, firstName, lastName, password1, password2 )
//         setFormData({...formData, [text]: e.target.value})
//     }

//     // Submit data to backend
//     const handleSubmit = e => {
//         e.preventDefault()
//         if (username && email && phone && firstName && lastName && password1){
//           console.log( username, email, phone, firstName, lastName, password1, password2 )
//           if (password1 === password2) {
//             setFormData({ ...formData, textChange: 'Submitting' });
//             axios
//               .post(
//                 `${process.env.REACT_APP_API_URL}/register`,
//                 {
//                   "username":username,
//                   "email":email,
//                   "phone":phone,
//                   "firstName":firstName,
//                   "lastName":lastName,
//                   "password": password1
//                 // username, email, phone, firstName, lastName, password: password1
//             },
//             { 
//               headers: {
//               "Content-Type":"application/json",
//               "Accept": "*/*",
//               } 
//           }
//     ).then(res => {
//                 setFormData({
//                     ...formData,
//                     username: '',
//                     email: '',
//                     phone: '',
//                     firstName: '',
//                     lastName: '',
//                     password1: '',
//                     password2: '',
//                     textChange: 'Submitted'
//                 })
//                 toast.success(res.data.message)
//             }).catch(err => {
//                 setFormData({
//                   ...formData,
//                   username: '',
//                   email: '',
//                   phone: '',
//                   firstName: '',
//                   lastName: '',
//                   password1: '',
//                   password2: '',
//                   textChange: 'Sign Up'
//               })
//               // console.log(err.response);
//               toast.error(err.response.data.errors)
//             })
//         } else {
//           toast.error("Passwords don't matches");
//         }
//       } else {
//             toast.error("Please Fill all fields")
//         }
//     }
    
//     const navigate = useNavigate();

//     return (
//         <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
//         {/* {isAuth() ? <Redirect to='/' /> : null} */}
//         {isAuth() ? <navigate to='/' /> : null}
//         <ToastContainer />
//         <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
//           <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
//             <div className='mt-12 flex flex-col items-center'>
//               <h1 className='text-2xl xl:text-3xl font-extrabold'>
//                 Sign Up for Ntuma
//               </h1>
  
//               <form
//                 className='w-full flex-1 mt-8 text-indigo-500'
//                 onSubmit={handleSubmit}
//               >
//                 <div className='mx-auto max-w-xs relative '>
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
//                     type='text'
//                     placeholder='UserName'
//                     onChange={handleChange('username')}
//                     value={username}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='email'
//                     placeholder='Email'
//                     onChange={handleChange('email')}
//                     value={email}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='text'
//                     placeholder='Phone Number'
//                     onChange={handleChange('phone')}
//                     value={phone}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='firstName'
//                     placeholder='FirstName'
//                     onChange={handleChange('firstName')}
//                     value={firstName}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='lastName'
//                     placeholder='LastName'
//                     onChange={handleChange('lastName')}
//                     value={lastName}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='password'
//                     placeholder='Password'
//                     onChange={handleChange('password1')}
//                     value={password1}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='password'
//                     placeholder='Confirm Password'
//                     onChange={handleChange('password2')}
//                     value={password2}
//                 />
//                   <button
//                     type='submit'
//                     className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
//                   >
//                     <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
//                     <span className='ml-3'>{textChange}</span>
//                     {/* Register */}
//                   </button>
//                 </div>
//                 <div className='my-12 border-b text-center'>
//                   <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
//                     Or sign with email or social login
//                   </div>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                   <a
//                     className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
//              bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
//                     href='/login'
//                     target='_self'
//                   >
//                     <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
//                     <span className='ml-4'>Sign In</span>
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
//             <div
//               className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
//               style={{ backgroundImage: `url(${authSvg})` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Register
