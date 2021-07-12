// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { isAuth } from '../helpers/auth';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() && isAuth().role === 'admin' ? (
                <Component {...props} />
            ) : (
                // <Redirect
                //     to={{
                //         pathname: '/signin',
                //         state: { from: props.location }
                //     }}
                // />
                <Navigate to="/login" replace state={props.location} />
            )
        }
    ></Route>
);

export default AdminRoute;