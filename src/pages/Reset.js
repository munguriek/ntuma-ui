import React, { useState, useEffect } from 'react';
import authSvg from '../assets/reset.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// import { withRouter } from "react-router-dom";
import { useParams } from 'react-router-dom';
import jwt from 'jsonwebtoken'; //added this because of the way I was using jwt.decode


const Reset = ({match}) => {
  const [formData, setFormData] = useState({
      password1: '',
      password2: '',
      token: '',
    textChange: 'Submit'
  });
    // eslint-disable-next-line no-unused-vars
    const { password1, password2, textChange } = formData; //I removed token from here since we were calling it on line 21 in the params below
    // const { password1, password2, textChange, token } = formData;

    const { token } = useParams();
    
    useEffect(() => {
        let password = jwt.decode(token); //added jwt.decode(token) here though at first it was match.params.token
        // let token = match.params.token
        if(token) {
            setFormData({...formData,password, token,}) //added password1 here it wasnt supposed to be their
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
    const handleSubmit = e => {
      console.log(password1, password2)
    e.preventDefault();
    if ((password1 === password2) && password1 && password2) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`${process.env.REACT_APP_API_URL}/password/reset`, {
            newPassword: password1,
            resetPasswordLink: token
        })
        .then(res => {
          console.log(res.data.message)
            setFormData({
              ...formData,
               password1: '',
              password2: ''
            });
            toast.success(res.data.message);
          
        })
        .catch(err => {
          toast.error('Something is wrong try again');
        });
    } else {
      toast.error('Passwords don\'t matches');
    }
  };
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Reset Your Password
            </h1>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              
              <form
                className='mx-auto max-w-xs relative '
                onSubmit={handleSubmit}
              >
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='password'
                  placeholder='password'
                  onChange={handleChange('password1')}
                  value={password1}
                  />
                  <input
                  className='w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='password'
                  placeholder='Confirm password'
                  onChange={handleChange('password2')}
                  value={password2}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  {/* <span className='ml-3'>Submit</span> */}
                  <span className='ml-3'>{textChange}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
  );
};
// export default withRouter(Reset)
export default Reset;


// /* eslint-disable no-undef */
// /* eslint-disable no-template-curly-in-string */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState} from 'react'
// import authSvg from '../assests/reset.svg'
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios'

// const Reset = () => {
//     const [formData, setFormData] = useState({
//         password: '',
//         token: '',
//     })

//     const { password, token } = formData;
//     useEffect(() => {
//         let token = match.params.token
//         if (token) {
//             setFormData({...formData, token})
//         }
//     }, [])

//     const handleChange = text => e => {
//         setFormData({...formData, [text]: e.target.value})
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         // eslint-disable-next-line no-self-compare
//         if ((password === password) &&  password && password) {
//             axios.put(`${process.env.REACT_APP_API_URL}/password/reset`, {
//                 newPassword: password,
//                 resetPasswordLink: token
//             }).then(res => {
//                 setFormData({...formData, password: ''})
//                 toast.success(res.data.message)
//             }).catch(err => {
//                 toast.error(
//                     `${err.response.data.error}`
//                 );
//             });
//         } else {
//             toast.error(
//                 `Passwords dont matches`
//             )
//         }
//     }


//     return (
//         <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
//             <ToastContainer />
//             <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
//                 <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
//                     <div className='mt-12 flex flex-col items-center'>
//                         <h1 className='text-2xl xl:text-3xl font-extrabold'>
//                             Reset Your Password
//                         </h1>
//                     <div className='w-full flex-1 mt-8 text-indigo-500'>
                        
//                         <form
//                         className='mx-auto max-w-xs relative '
//                         onSubmit={handleSubmit}
//                         >
//                         <input
//                             className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
//                             type='password'
//                             placeholder='password'
//                             onChange={handleChange('password')}
//                             value={password}
//                             />
//                         <button
//                             type='submit'
//                             className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
//                         >
//                             <i className='fas fa-sign-in-alt  w-6  -ml-2' />
//                             <span className='ml-3'>Submit</span>
//                         </button>
//                         </form>
//                     </div>
//                     </div>
//                 </div>
//                 <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
//                     <div
//                     className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
//                     style={{ backgroundImage: `url(${authSvg})` }}
//                     ></div>
//                 </div>
//             </div>
//             ;
//         </div>


//     )
// }

// export default Reset