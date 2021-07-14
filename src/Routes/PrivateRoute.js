// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                // <Redirect
                //     to={{
                //         pathname: '/login',
                //         state: { from: props.location }
                //     }}
                // />
                <Navigate to="/home" replace state={props.location} />
            )
        }
    ></Route>
);

export default PrivateRoute;

// import { Navigate } from 'react-router-dom';

// function App() {
//   return <Navigate to="/login" replace state={state} />;
// }




// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isAuth } from '../helpers/auth';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuth() ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/login',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     ></Route>
// );

// export default PrivateRoute;