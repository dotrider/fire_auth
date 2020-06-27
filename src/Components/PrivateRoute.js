import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth'

//Resusable HOC
//PrivateRoute holds component that we want to render if user is authenticated along with the rest of the props
const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    // get currentUser from AuthContext api using useContext()
        const { currentUser } = useContext(AuthContext)
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page

        <Route 
            {...rest} 
            render={routeProps => (
            currentUser ?
                <RouteComponent {...routeProps} />
            : <Redirect to='login' />
        )} />
    );
};

export default PrivateRoute;