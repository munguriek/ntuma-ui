import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import * as Yup from 'yup';
// import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';
import axios from 'axios';
// import {useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from '../helpers/auth';

// const Login = () => {
const Login = ({ history }) => {
  //  const [admin, setAdmin] = useState({
  //    username: "",
  //    password: ""
  //  });
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    textChange: 'Sign In'
  })


  //  const savedAdmin = () => {
  //    axios.post("http://localhost:1200/login", { ...admin })
  //      .then( (res) => {
  //       //  const check = res.data.data.every(function(admin) {
  //       //   return admin.saved;
  //       // });
  //         // return check;        
  //        console.log(res.data);
  //      })
  //      .catch((err) => {
  //        console.log(err);
  //      });
  //     //  return promise;
  //  };

  //   // Using it:
  //   //   savedAdmin().then(function(isSaved) {
  //   //      console.log(isSaved);
  //   //  });
  //  const handleSubmit = (e) => {
  //    e.preventDefault();
  //  };

  const {email, password1, textChange } = formData
  // Handle change inputs
  const handleChange = text => e => {
      // console.log(username, email, phone, firstName, lastName, password)
      setFormData({...formData, [text]: e.target.value})
  }

  // Submit data to backend
  const handleSubmit = e => {
      console.log(process.env.REACT_APP_API_URL);
      e.preventDefault()
      if (email && password1){
          setFormData({ ...formData, textChange: 'Submitting' });
          axios.post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
          }).then(res => {
              authenticate(res, () => {
                  setFormData({
                      ...formData,
                      email: '',
                      password1: '',
                      textChange: 'Submitted'
                  })
                  console.log(res.data)
              })
                // if authenticate but not admin redirect to / private
                // if admin redirect to /admin
                isAuth() && isAuth().role === 'admin'
                    // ?history.push('/admin')
                    // :history.push('/private');
                    // ?navigate('/admin')
                    ?navigate('/')
                    :navigate('/private')
                toast.success(`Hey ${res.data.user.username}, Welcome back!`);
              })
            //   .catch((error) => {
            //     if (error.response) {
            //       // Request made and server responded
            //       console.log(error.response.data);
            //       console.log(error.response.status);
            //       console.log(error.response.headers);
            //     } else if (error.request) {
            //       // The request was made but no response was received
            //       console.log(error.request);
            //     } else {
            //       // Something happened in setting up the request that triggered an Error
            //       console.log('Error', error.message);
            //     }
            // });
              .catch(err => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Sign In'
                });
                console.log(err)
                toast.error(err.response.data.errors);
              });
        } else {
          toast.error('Please fill all fields');
        }
      };

  const navigate = useNavigate();
  
  const picture = {
    imageUrl: '/static/images/loginPagePic.jpg',
    name: 'Shop with Ntuma'
  };

  return (
    <>
      {isAuth() ? <navigate to='/' /> : null},
      <ToastContainer />
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
                }) => ( */}
              {/* <form onSubmit={(handleSubmit, savedAdmin)}> */}
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
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
                    pt: 1,
                  }}
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  // onBlur={handleBlur}
                  // onChange={(e) => {
                  //   setAdmin({ ...admin, username: e.target.value });
                  // }}
                  onChange={handleChange('email')}
                  type="email"
                  // value={admin.username}
                  value={email}
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
                  // onChange={(e) => {
                  //   setAdmin({ ...admin, password: e.target.value });
                  // }}
                  onChange={handleChange('password1')}
                  type="password"
                  // value={admin.password}
                  value={password1}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    // onClick = {() => {
                    //   navigate('/app/Dashboard')
                    // }}
                  >
                    {/* Sign in now */}
                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                    <span className='ml-3'>{textChange}</span>
                  </Button>
                </Box>
                <a
                    href='/users/password/forget'
                    className='no-underline hover:underline text-indigo-500 text-md text-right right-4  mt-2'
                >
                  Forgot password?
                </a>
                <Typography color="textSecondary" variant="body1">
                  Don&apos;t have an account?{" "}
                  <Link component={RouterLink} to="/register" variant="h6">
                    Sign up
                  </Link>
                </Typography>
              </form>
              {/* )}
              </Formik> */}
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

// /* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import authSvg from '../assets/login.svg'
// import { ToastContainer, toast } from 'react-toastify';
// import { authenticate, isAuth } from '../helpers/auth';
// import axios from 'axios';
// // import { Redirect } from 'react-router-dom';
// import { Navigate, useNavigate } from 'react-router-dom';


// const Login = ({ history }) => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password1: '',
//         textChange: 'Sign In'
//     })

//     const {email, password1, textChange } = formData
//     // Handle change inputs
//     const handleChange = text => e => {
//         // console.log(username, email, phone, firstName, lastName, password)
//         setFormData({...formData, [text]: e.target.value})
//     }

//     // Submit data to backend
//     const handleSubmit = e => {
//         console.log(process.env.REACT_APP_API_URL);
//         e.preventDefault()
//         if (email && password1){
//             setFormData({ ...formData, textChange: 'Submitting' });
//             axios.post(`${process.env.REACT_APP_API_URL}/login`, {
//                 email,
//                 password: password1
//             }).then(res => {
//                 authenticate(res, () => {
//                     setFormData({
//                         ...formData,
//                         email: '',
//                         password1: '',
//                         textChange: 'Submitted'
//                     })
//                     console.log(res.data)
//                 })
//                   // if authenticate but not admin redirect to / private
//                   // if admin redirect to /admin
//                   isAuth() && isAuth().role === 'admin'
//                       // ?history.push('/admin')
//                       // :history.push('/private');
//                       // ?navigate('/admin')
//                       ?navigate('/')
//                       :navigate('/private')
//                   toast.success(`Hey ${res.data.user.username}, Welcome back!`);
//                 })
//               //   .catch((error) => {
//               //     if (error.response) {
//               //       // Request made and server responded
//               //       console.log(error.response.data);
//               //       console.log(error.response.status);
//               //       console.log(error.response.headers);
//               //     } else if (error.request) {
//               //       // The request was made but no response was received
//               //       console.log(error.request);
//               //     } else {
//               //       // Something happened in setting up the request that triggered an Error
//               //       console.log('Error', error.message);
//               //     }
//               // });
//                 .catch(err => {
//                   setFormData({
//                     ...formData,
//                     email: '',
//                     password1: '',
//                     textChange: 'Sign In'
//                   });
//                   console.log(err)
//                   toast.error(err.response.data.errors);
//                 });
//           } else {
//             toast.error('Please fill all fields');
//           }
//         };

//     const navigate = useNavigate();

//     return (
//         <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
//           {/* {isAuth() ? <Redirect to='/' /> : null} */}
//         {isAuth() ? <navigate to='/' /> : null}
//         <ToastContainer />
//         <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
//           <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
//             <div className='mt-12 flex flex-col items-center'>
//               <h1 className='text-2xl xl:text-3xl font-extrabold'>
//                 Sign In for Ntuma
//               </h1>
  
//               <form
//                 className='w-full flex-1 mt-8 text-indigo-500'
//                 onSubmit={handleSubmit}
//               >
//                 <div className='mx-auto max-w-xs relative '>
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='email'
//                     placeholder='Email'
//                     onChange={handleChange('email')}
//                     value={email}
//                   />
//                   <input
//                     className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
//                     type='password'
//                     placeholder='Password'
//                     onChange={handleChange('password1')}
//                     value={password1}
//                   />
//                   <button
//                     type='submit'
//                     className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
//                   >
//                     <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
//                     <span className='ml-3'>{textChange}</span>
//                   </button>
//                   <a
//                     href='/users/password/forget'
//                     className='no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2'
//                 >
//                   Forget password?
//                 </a>
//                 </div>
//                 <div className='my-12 border-b text-center'>
//                   <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
//                     Or Sign Up
//                   </div>
//                 </div>
//                 <div className='flex flex-col items-center'>
//                   <a
//                     className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
//              bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
//                     href='/register'
//                     target='_self'
//                   >
//                     <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
//                     <span className='ml-4'>Log In</span>
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
//         ;
//       </div>
//     );
// };

// export default Login
