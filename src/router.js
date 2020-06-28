import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';
//Using PrivateRoute to secure our route if user is not login
import PrivateRoute from './Components/PrivateRoute';

export default (
    <Switch>
        <PrivateRoute exact path='/' component={Homepage}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
    </Switch>
)