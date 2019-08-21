import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const friends = rest.friends;
    const setFriends = rest.setFriends;

    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} friends={friends} setFriends={setFriends} />;
                }
                return <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;